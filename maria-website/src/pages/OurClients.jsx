import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import clients from "../components/clientsData";

const OurClients = () => {
  return (
    <section style={{ padding: "60px 20px", textAlign: "center" }}>
      <Typography variant="h4" sx={{ mb: 5, fontWeight: 600 }}>
        Our Trusted Clients
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {clients.map((client) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={client.id}>
            <Box sx={{ textAlign: "center" }}>
              <img
                src={client.logo}
                alt={client.name}
                style={{
                  width: "100%",
                  maxHeight: "70px",
                  objectFit: "contain",
                }}
              />
              <Typography variant="body2" sx={{ mt: 1 }}>
                {client.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default OurClients;
