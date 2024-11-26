import React from 'react'
import "../css/Certifications.css"
import "../css/Common.css";

function Certifications() {
  return (
    <>
      <div className="container mt-3">
        <h1 className='mt-5 certification hire-para'>Certifications</h1>

        <div className="certificate">
              <div className="certificateDiv">
                <h3>Certificate Name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta placeat, obcaecati quibusdam consectetur ipsam sequi corrupti eaque deleniti adipisci dolore consequatur, voluptas a fuga. Eius ad atque necessitatibus veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem optio quidem at illo ipsum alias eum assumenda voluptas provident nam.</p>
              </div>
              <div className="imageDiv">
                    <img src="https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk=" alt="" />
              </div>
        </div>

        <div className="certificate">
                <div className="imageDiv">
                    <img src="https://media.istockphoto.com/id/1349606247/vector/certificate-template.jpg?s=612x612&w=0&k=20&c=BWqqnPs1l6fOu4u_72gmsgCZ_zV_asBK7VjRnjNBRLQ=" alt="" />
                </div>
                <div className=" certificateDiv">
                <h3>Certificate Name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta placeat, obcaecati quibusdam consectetur ipsam sequi corrupti eaque deleniti adipisci dolore consequatur, voluptas a fuga. Eius ad atque necessitatibus veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veritatis nulla vel possimus officiis id quam, aperiam voluptatum reprehenderit eligendi.</p>
                </div>
        </div>
      </div>
    </>
  )
}

export default Certifications
