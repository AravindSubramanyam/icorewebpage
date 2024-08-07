import React, { useState } from 'react';
import './contact_us_inner.css';
import $ from 'jquery';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Redirect } from 'react-router-dom';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const ContactUsInner = () => {
  const [formData, setFormData] = useState({
    fullName: null,
    email: null,
    phone: "+91",
    message: null,
    lastname: null,
    iworkFor: null,
    cotacttitle: null,
    errorsweb: {
      fullName: '',
      email: '',
      message: '',
      phone: '',
      lastname: '',
      iworkFor: '',
      cotacttitle: '',
    },
    buttonText: "Submit",
    thanksMSG: "",
    formshowedfirst: false,
    throwsuccessmsgform: true
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errorsweb = { ...formData.errorsweb };

    switch (name) {
      case 'fullName':
        errorsweb.fullName =
          value.length < 3
            ? 'Name must be at least 3 characters long!'
            : '';
        break;
      case 'lastname':
        errorsweb.lastname =
          value.length < 1
            ? 'Name must be at least 1 character long!'
            : '';
        break;
      case 'email':
        errorsweb.email = validEmailRegex.test(value)
          ? ''
          : 'Email is not valid!';
        break;
      case 'message':
        errorsweb.message =
          value.length < 10
            ? 'message must be at least 10 characters long!'
            : '';
        break;
      case 'cotacttitle':
        errorsweb.cotacttitle =
          value.length < 2
            ? 'message must be at least 2 characters long!'
            : '';
        break;
      case 'iworkFor':
        errorsweb.iworkFor =
          value.length < 5
            ? 'message must be at least 5 characters long!'
            : '';
        break;
      default:
        break;
    }

    setFormData({ ...formData, errorsweb, [name]: value });
  };

  const handleOnChange = value => {
    let errorsweb = { ...formData.errorsweb };
    errorsweb.phone = value.length < 6 ? 'Please Enter Phone number' : '';
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    let errorsweb = { ...formData.errorsweb };
    if (formData.fullName === null) {
      errorsweb.fullName = 'Please Enter First Name ';
      setFormData({ ...formData });
    }
    if (formData.lastname === null) {
      errorsweb.lastname = 'Please Enter Last Name ';
      setFormData({ ...formData });
    }
    if (formData.phone === "+91") {
      errorsweb.phone = 'Please Enter Phone Number ';
      setFormData({ ...formData });
    }
    if (formData.email === null) {
      errorsweb.email = 'Please Enter Valid Email ';
      setFormData({ ...formData });
    }
    if (formData.iworkFor === null) {
      errorsweb.iworkFor = 'Please Enter Company Name';
      setFormData({ ...formData });
    }
    if (formData.cotacttitle === null) {
      errorsweb.cotacttitle = 'Please Enter Title';
      setFormData({ ...formData });
    }
    if (formData.message === null) {
      errorsweb.message = 'Please Enter Message ';
      setFormData({ ...formData });
    } else {
      console.log('Valid Form');
      var icore_contact_landing = {
        "contactFirstName": formData.fullName,
        "contactLastName": formData.lastname,
        "contactEmail": formData.email,
        "contactPhone": "+" + formData.phone,
        "message": formData.message,
        "contactTitle": formData.cotacttitle,
        "companyName": formData.iworkFor,
      };
      setFormData({ ...formData, buttonText: 'Loading....' });

      console.log(icore_contact_landing);
      fetch('https://icoresoftwaresystems.com/sendenquiryrequest/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(icore_contact_landing)
      })
        .then(function (resp) {
          console.log('success');
          console.log(resp);
          return resp.json();
          // event.target.reset();
        })
        .then(() => setFormData({
          ...formData,
          redirect: true,
          buttonText: 'Submitted',
          thanksMSG: "Thank you for your interest,  we will contact you as soon as possible.",
          formshowedfirst: true,
          throwsuccessmsgform: false
        }));
    }
  };

  const { errorsweb } = formData;

  return (
    <div>
      {/* form start */}
      {/* end */}
      {!formData.formshowedfirst &&
        <div>
          <div className="row">
            <div className="col-lg-12 header_top_mobile">
              <div className="contact_bg_head_inner">
                <h2 className="head_txt_contact_inner1 contct">Get connected with us...</h2>
                <p className="ptag_contact_inner1">iCore Software Systems Private Limited respects your privacy</p>
              </div>
            </div>
          </div>
          <div className={'col-lg-6'}>
            <div className={'bg_contact_right'}>
              <div className="card_address_contact_inner">
                <h5 className="head_map_inner2_bot">India</h5>
                <p className="ptag_fs_cont_inner_map_card"><b>Mobile :</b> <a className="atag_under_cont_inner" href="tel:+917358056001"> +91 73580 56001</a></p>
                <p className="ptag_fs_cont_inner_map_card"><b>Phone :</b> <a className="atag_under_cont_inner    " href="tel:+9104442059777"> +91 (044) 42059777</a></p>
                <p className="ptag_fs_cont_inner_map_card"><b>Website :</b> <a className="atag_under_cont_inner" href="https://www.icoresoftwaresystems.com">https://www.icoresoftwaresystems.com</a>
                  <br />
                </p>
                <p className="ptag_fs_cont_inner_map_card"><b>Email :</b> <a className="atag_under_cont_inner" href="mailto:contact@icoresoftwaresystems.com"> contact@icoresoftwaresystems.com</a>
                  <br />
                </p>
                <br />
              </div>
              {/* second address */}
              <div className="card_address_contact_inner">
                <h5 className="head_map_inner2_bot">USA</h5>
                <p className="ptag_fs_cont_inner_map_card"><b>Phone : </b><a className="atag_under_cont_inner" href="tel: +1469885-2249">+1 (469) 885-2249</a>
                  <br />
                </p>
                <p className="ptag_fs_cont_inner_map_card"><b>Website :</b> <a className="atag_under_cont_inner" href="https://www.icoretek.com"> https://www.icoretek.com</a>
                  <br />
                </p>
                <p className="ptag_fs_cont_inner_map_card"><b>Email :</b> <a className="atag_under_cont_inner" href="mailto:contact@icoretek.com"> contact@icoretek.com</a>
                  <br />
                </p>
                <br />
              </div>
            </div>
          </div>











          <div className={'col-lg-6'}>
            <form noValidate onSubmit={handleSubmit}>
              <div className="col-lg-12 extra_pad_contact_inner_input">
                <label className="label_contact_inner1">First Name <span className="span_star_clr_inner"> *</span></label>
                <input type="text" className="custom_inp_contact_inner1" placeholder="First Name" name='fullName' onChange={handleChange} noValidate />
                {errorsweb.fullName.length > 0 &&
                  <span className='errors_msg_custom'>{errorsweb.fullName}</span>}
              </div>
              <div className="col-lg-12 extra_pad_contact_inner_input">
                <label className="label_contact_inner1">Last Name <span className="span_star_clr_inner"> *</span></label>
                <input type="text" className="custom_inp_contact_inner1" placeholder="Last Name" name='lastname' onChange={handleChange} noValidate />
                {errorsweb.lastname.length > 0 &&
                  <span className='errors_msg_custom'>{errorsweb.lastname}</span>}
              </div>
              <div className="col-lg-12 extra_pad_contact_inner_input">
                <label className="label_contact_inner1">Title <span className="span_star_clr_inner"> *</span></label>
                <input type="text" className="custom_inp_contact_inner1" placeholder="Title" name="cotacttitle" onChange={handleChange} noValidate />
                {errorsweb.cotacttitle.length > 0 &&
                  <span className='errors_msg_custom'>{errorsweb.cotacttitle}</span>}
              </div>
              <div className="col-lg-12 extra_pad_contact_inner_input mrg_cus_reactphone">
                <label className="label_contact_inner1">Phone Number <span className="span_star_clr_inner"> *</span></label>
                <ReactPhoneInput className="custom_inp_contact_inner1" noValidate value={formData.phone} onChange={handleOnChange}
                  inputExtraProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true,
                  }}
                />
                {errorsweb.phone.length > 0 &&
                  <span className='errors_msg_custom'>{errorsweb.phone}</span>}
              </div><br />
              <div className="col-lg-12 extra_pad_contact_inner_input">
                <label className="label_contact_inner1">Email <span className="span_star_clr_inner"> *</span></label>
                <input type="email" className="custom_inp_contact_inner1" placeholder="Enter Email" name="email" onChange={handleChange} noValidate />
                {errorsweb.email.length > 0 &&
                  <span className='errors_msg_custom'>{errorsweb.email}</span>}
              </div>
              <div className="col-lg-12 extra_pad_contact_inner_input">
                <label className="label_contact_inner1">Company Name <span className="span_star_clr_inner"> *</span></label>
                <input type="text" className="custom_inp_contact_inner1" placeholder="Company Name" name="iworkFor" onChange={handleChange} noValidate />
                {errorsweb.iworkFor.length > 0 &&
                  <span className='errors_msg_custom'>{errorsweb.iworkFor}</span>}
              </div>
              <div className="col-lg-12 extra_pad_contact_inner_input">
                <label className="label_contact_inner1">Message <span className="span_star_clr_inner"> *</span></label>
                {/* <textarea name="issues" className="custom_inp_contact_inner1" id="iq" rows="4" placeholder="Enter your Message" name="message" onChange={this.handleChange} noValidate></textarea> */}
                {errorsweb.message.length > 0 &&
                  <span className='errors_msg_custom'>{errorsweb.message}</span>}
              </div>
              <button className="Rectangle-8 dis_center" disabled={errorsweb.email || errorsweb.fullName || errorsweb.lastname || errorsweb.iworkFor || errorsweb.message || errorsweb.phone || formData.buttonText === "Loading...." || formData.thanksMSG !== ""}>{formData.buttonText}</button>
              <span className="loading_text_form">{formData.thanksMSG}</span>
            </form>
          </div>
         
        </div>
      }
      {!formData.throwsuccessmsgform &&
        <div className="row">
          <div className="sentheaddiv">
            <h1 className="txt_sceessentmsg"><i class="fa fa-check-circle" aria-hidden="true"></i></h1>
            <h1 className="txt_sceessentmsg">Thank you for your interest,  we will contact you as soon as possible.</h1>
          </div>
        </div>
      }
    </div>
  );
};

export default ContactUsInner;
