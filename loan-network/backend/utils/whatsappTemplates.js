// OTP message template
function otpMessageTemplate(name, otp) {
    return `Hi ${name}, your OTP for login is: *${otp}*.\nIt is valid for 5 minutes.\n\n- Team EmergencyLoan 🤝`;
  }
  
  // Loan request received
  function loanRequestTemplate(lenderName, borrowerName, amount) {
    return `Hello ${lenderName},\n\nYou have a new loan request from *${borrowerName}* for ₹${amount}.\nPlease review it in your dashboard.`;
  }
  
  // Loan approved
  function loanApprovedTemplate(borrowerName, amount) {
    return `Great news ${borrowerName}! 🎉\nYour loan request of ₹${amount} has been *approved*.\nCheck your dashboard for details.`;
  }
  
  // Loan rejected
  function loanRejectedTemplate(borrowerName) {
    return `Hey ${borrowerName}, unfortunately your loan request was *rejected*. 😔\nYou can try again or reach out to other lenders.`;
  }
  
  // Loan repaid confirmation
  function loanRepaidTemplate(lenderName, borrowerName, amount) {
    return `Hi ${lenderName},\n*${borrowerName}* has repaid the loan of ₹${amount}.\nTrust score has been updated ✅.`;
  }
  
  module.exports = {
    otpMessageTemplate,
    loanRequestTemplate,
    loanApprovedTemplate,
    loanRejectedTemplate,
    loanRepaidTemplate,
  };
  