import emailjs from "@emailjs/browser";


import { config } from '../config/env';


 


//.   AUTO
//user_name
//company_name

// Hello {{admin_name}},

// You have received a new message from your website contact form.

// -----------------------------------
// 👤 Name: {{user_name}}
// 📧 Email: {{user_email}}
// 📱 Phone: {{user_phone}}

// 📝 Message:
// {{message}}
// -----------------------------------

// 📅 Submitted At: {{time}}

// Regards,
// {{user_name}}
 


export const sendContactEmails = async (formData) => {

  console.log("formData", formData)

  const   { SERVICE_ID ,
    CONTACT_TEMPLATE_ID,
    AUTO_REPLY_TEMPLATE_ID ,
    PUBLIC_KEY ,
    ADMIN_NAME,
    STORE_NAME
    } = config;


    console.log('env',{ CONTACT_TEMPLATE_ID,
      AUTO_REPLY_TEMPLATE_ID ,
      PUBLIC_KEY ,
      ADMIN_NAME,
      STORE_NAME})
    try {
      const payload = {
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        message: formData.message,
        time: new Date().toLocaleString(),
        admin_name: ADMIN_NAME,
        company_name:STORE_NAME
      };
  
      // Send both emails in parallel
      const [adminRes, userRes] = await Promise.all([
        emailjs.send(SERVICE_ID, CONTACT_TEMPLATE_ID, payload, PUBLIC_KEY),
        emailjs.send(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, payload, PUBLIC_KEY),
      ]);
  

      console.log("tes",{adminRes, userRes})
      return {
        success: true,
        adminRes,
        userRes,
      };
    } catch (error) {
      console.error("Email sending failed:", error);
      return {
        success: false,
        error,
      };
    }
  };