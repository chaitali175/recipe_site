import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter  className="font-small pt-4 mt-4">
     
      <div style={{background:'rgba(0,0,0,.8)',color:'white'}} className="footer-copyright text-center py-3">
        <MDBContainer fluid >
          &copy; {new Date().getFullYear()} Copyright: Chaitali Bochare
        </MDBContainer>
      </div>
    </MDBFooter>
    
  );
}

export default FooterPage;