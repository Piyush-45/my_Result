function validate() {
    const rollNo = document.getElementById("username").value;
    const dob = document.getElementById("dob").value;
    
    // Replace "123" and "2003-07-06" with your desired roll number and date of birth values
    const validRollNo ="2100290110112";
    const validDOB = "2003-07-06";
    
    if (rollNo === validRollNo && dob === validDOB) {
        // window.location.href= "result.html"
        redirectToResultPage()
    } else {
        alert("Invalid roll number or date of birth. Please check and try again.");
        return false; // Prevent form submission
    }
}

function redirectToResultPage() {
    window.location.href = "result.html"; // Replace with the actual URL of your result page
}
