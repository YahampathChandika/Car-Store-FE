import React from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Modal,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import "../../assets/css/Inquire.css";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 8,
};

const Inquire = ({ open, handleClose }) => {
  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      location: "",
      email: "",
      phone: "",
      message: "",
      contactMethod: "phone",
    },
  });

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  // const onSubmit = async (data) => {
  //   try {
  //     console.log(data);
  //     reset(); 
  //     handleClose(); 

  //     // Send email to yourself
  //     await emailjs.send(
  //       "service_gkxwd7f",
  //       "template_qcpj1vb",
  //       {
  //         to_name: "Yahampath",
  //         from_name: data.name,
  //         location: data.location,
  //         email: data.email,
  //         phone: data.phone,
  //         contactMethod: data.contactMethod,
  //         message: data.message,
  //       },
  //       "8rOnRzOsXycyMkeTj"
  //     );

  //     // Send email to the customer
  //     await emailjs.send(
  //       "service_gkxwd7f",
  //       "template_1m1m27f",
  //       {
  //         from_name: data.name,
  //         location: data.location,
  //         email: data.email,
  //         phone: data.phone,
  //         contactMethod: data.contactMethod,
  //         message: data.message,
  //       },
  //       "8rOnRzOsXycyMkeTj"
  //     );

  //     // Display success message
  //     Toast.fire({
  //       icon: "success",
  //       title: "Enquiry submitted successfully!",
  //     });
  //   } catch (error) {
  //     // Handle errors and display error message
  //     console.error("Error sending email:", error);
  //     Toast.fire({
  //       icon: "error",
  //       title: "Failed to submit enquiry. Please try again.",
  //     });
  //   }
  // };

  const onSubmit = async (data) => {
    try {
      reset(); // Reset form fields
      handleClose(); // Close the modal

      // Display loading popup
      Swal.fire({
        title: "Sending Inquiry...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading(); 
        },
      });
  
      console.log(data);
  
      // Send email to yourself
      await emailjs.send(
        "service_gkxwd7f",
        "template_qcpj1vb",
        {
          to_name: "Yahampath",
          from_name: data.name,
          location: data.location,
          email: data.email,
          phone: data.phone,
          contactMethod: data.contactMethod,
          message: data.message,
        },
        "8rOnRzOsXycyMkeTj"
      );
  
      // Send email to the customer
      await emailjs.send(
        "service_gkxwd7f",
        "template_1m1m27f",
        {
          from_name: data.name,
          location: data.location,
          email: data.email,
          phone: data.phone,
          contactMethod: data.contactMethod,
          message: data.message,
        },
        "8rOnRzOsXycyMkeTj"
      );
  
      // Close the loading popup and display success message
      Swal.close();
      Toast.fire({
        icon: "success",
        title: "Inquiry submitted successfully!",
      });
  
    } catch (error) {
      // Close the loading popup and display error message
      Swal.close();
      console.error("Error sending email:", error);
      Toast.fire({
        icon: "error",
        title: "Failed to submit inquiry. Please try again.",
      });
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <div className="modal-title-con">
          Vehicle Inquiry
          <p className="modal-veh-name">Koenigsegg Regera</p>
        </div>
        <hr className="modal-hr" />
        <form onSubmit={handleSubmit(onSubmit)} className="inquire-form">
          <div className="modal-field-con">
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="location"
              control={control}
              rules={{ required: "Location is required" }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Location"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </div>
          <div className="modal-field-con">
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="phone"
              control={control}
              rules={{ required: "Phone number is required" }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </div>

          <Controller
            name="message"
            control={control}
            rules={{ required: "Message is required" }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />

          <FormControl component="fieldset" margin="normal">
            <div className="modal-field-con">
              <FormLabel component="legend">
                How would you like to be contacted?
              </FormLabel>
              <Controller
                name="contactMethod"
                control={control}
                render={({ field }) => (
                  <RadioGroup {...field} row>
                    <FormControlLabel
                      value="phone"
                      control={<Radio />}
                      label="Phone"
                    />
                    <FormControlLabel
                      value="email"
                      control={<Radio />}
                      label="Email"
                    />
                  </RadioGroup>
                )}
              />
            </div>
          </FormControl>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </Box>
    </Modal>
  );
};

export default Inquire;
