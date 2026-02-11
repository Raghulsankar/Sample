// Testimonials.jsx
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
} from "@mui/material";
import testimonials from "../components/testimonialsData";
import OurClients from "./OurClients";
// import "./Testimonials.css";

const Testimonials = () => {
  return (
    <>
    <OurClients/>
    <section className="testimonial-section">
      <Typography variant="h4" className="section-title">
        What Doctors Say
      </Typography>

      <Grid container spacing={4}>
        {testimonials.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card className="testimonial-card">
              <Avatar
                src={item.image}
                alt={item.name}
                className="testimonial-avatar"
              />

              <CardContent>
                <Typography className="testimonial-comment">
                  “{item.comment}”
                </Typography>

                <Typography className="testimonial-name">
                  {item.name}
                </Typography>

                <Typography className="testimonial-position">
                  {item.position}
                </Typography>

                <Typography className="testimonial-institution">
                  {item.institution}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
    </>
  );
};

export default Testimonials;
