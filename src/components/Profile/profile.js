import React from 'react'
import { Component } from 'react';
import {Page,Container,Imgholder,Img,Label,ContainerB} from './style';
import './profile.css';
import { AddProducts } from './AddProducts';
export class Profile extends Component   {
    
   state={
       profileImg:'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon-715x715.png'
   }
   imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
    render(){
    const {profileImg}= this.state;
        return (
            <>
                <Page>
                    <Container>
                        <Imgholder>
                            <Img src={profileImg} alt="" id="img" className="img" />
                            
                        </Imgholder>
                        <input type="file" name="image-upload" id="input" accept="image/*" onChange={this.imageHandler}/>
                        <Label>
                            <label htmlFor="input" className="image-upload">
                                <i className="material-icons">add_photo_alternate</i>
                                Choose your photo
                            </label>
                        </Label>
                    </Container>
                    <ContainerB>
                        <div className="row">
                            <div className="col-md-8 offset-md-1">
                                <AddProducts/>
                            </div>
                        </div>
                    </ContainerB>
                </Page>
                
            </>
        )
    }
}
export default Profile;




