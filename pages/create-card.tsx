import { useState } from "react";
import {
  Typography,
  Box,
  Stack,
  Button,
  TextField,
  Grid,
  IconButton,
} from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import Layout from "../components/layout";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import { useForm } from "react-hook-form";

const CreateCard = () => {
  const [formData, setFormData] = useState();

  const schema = yup.object().shape({
    fName: yup.string().required("First Name is required"),
    lName: yup.string().required("Last Name is required"),
    email: yup.string().email().required("email is required"),
    phone: yup.number().required("Phone number is required"),
    address: yup.string().required("Address is required"),
    company: yup.string().required("Company is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log("Form Data", data);
  };
  return (
    <Layout>
      <Link href="/card">
        <IconButton>
          <ArrowBackSharpIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Link>

      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center", paddingBottom: "1rem" }}
          >
            Personal card information
          </Typography>

          <Box
            sx={{
              border: "2px solid gray",
              borderRadius: "1rem",
              padding: "1rem",
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Typography>First Name</Typography>
                <TextField
                  size="small"
                  fullWidth
                  type="text"
                  error={errors.fName ? true : false}
                  helperText={errors.fName && errors.fName?.message}
                  {...register("fName")}
                  inputProps={{
                    style: { color: "white" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        border: "1.5px solid white",
                      },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        border: "2px solid white",
                      },
                    },
                    "MuiOutlinedInput-root.Mui-disabled ": {
                      "& > fieldset": {
                        border: "1.5px solid white",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Typography>Last Name</Typography>
                <TextField
                  size="small"
                  fullWidth
                  error={errors.lName ? true : false}
                  helperText={errors.lName && errors.lName?.message}
                  {...register("lName")}
                  type="text"
                  inputProps={{
                    style: { color: "white" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        border: "1.5px solid white",
                      },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        border: "2px solid white",
                      },
                    },
                    "MuiOutlinedInput-root.Mui-disabled ": {
                      "& > fieldset": {
                        border: "1.5px solid white",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Typography>Email</Typography>
                <TextField
                  size="small"
                  fullWidth
                  type="text"
                  inputProps={{
                    style: { color: "white" },
                  }}
                  error={errors.email ? true : false}
                  helperText={errors.email && errors.email?.message}
                  {...register("email")}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        border: "1.5px solid white",
                        color: "white",
                      },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        border: "2px solid white",
                        color: "white",
                      },
                    },
                    "MuiOutlinedInput-root.Mui-disabled ": {
                      "& > fieldset": {
                        border: "1.5px solid white",
                        color: "white",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Typography>Phone No</Typography>
                <TextField
                  size="small"
                  fullWidth
                  error={errors.phone ? true : false}
                  helperText={errors.phone && errors.phone?.message}
                  {...register("phone")}
                  type="text"
                  inputProps={{
                    style: { color: "white" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        border: "1.5px solid white",
                      },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        border: "2px solid white",
                      },
                    },
                    "MuiOutlinedInput-root.Mui-disabled ": {
                      "& > fieldset": {
                        border: "1.5px solid white",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Typography>Address</Typography>
                <TextField
                  size="small"
                  fullWidth
                  type="text"
                  inputProps={{
                    style: { color: "white" },
                  }}
                  error={errors.address ? true : false}
                  helperText={errors.address && errors.address?.message}
                  {...register("address")}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        border: "1.5px solid white",
                      },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        border: "2px solid white",
                      },
                    },
                    "MuiOutlinedInput-root.Mui-disabled ": {
                      "& > fieldset": {
                        border: "1.5px solid white",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Typography>Comapny Name</Typography>
                <TextField
                  size="small"
                  fullWidth
                  type="text"
                  inputProps={{
                    style: { color: "white" },
                  }}
                  error={errors.company ? true : false}
                  helperText={errors.company && errors.company?.message}
                  {...register("company")}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        border: "1.5px solid white",
                      },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        border: "2px solid white",
                      },
                    },
                    "MuiOutlinedInput-root.Mui-disabled ": {
                      "& > fieldset": {
                        border: "1.5px solid white",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Button
                  variant="contained"
                  size="medium"
                  fullWidth
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}></Grid>
      </Grid>
    </Layout>
  );
};

export default CreateCard;
