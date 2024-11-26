import React from 'react'
import "../css/Footer.css"
import "../css/Common.css";
function Footer() {
  return (
    <>
        <footer class="footer">
            <div class="footer-container">
            <p>&copy; 2024 Mudabir Kowsar</p>
            <p>khandaymudabir@gmail.com</p>
            <p>Built with: HTML, CSS, JavaScript, React</p>
            <div class="social-icons">
                <a href="https://www.instagram.com/xain_khanday?igsh=bXQxaW9ocmF6aDRu" target="_blank" class="icon"><i class="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/in/mudabir-kowsar-34783a256/" target="_blank" class="icon"><i class="bi bi-linkedin"></i></a>
                <a href="mailto:khandaymudabir@gmail.com" class="icon"><i class="bi bi-envelope-arrow-up"></i></a>
            </div>
            </div>
        </footer> 
    </>
  )
}

export default Footer
