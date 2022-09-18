import React from "react";

import {
  Container,
  Button,
  Typography,
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
} from "@mui/material";

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 2 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{ paddingTop: 5, paddingBottom: 5 }}>
        Welcome to Vendor Dashboard
      </Typography>

      <Grid container>
        <Grid item md={3} padding={2}>
          <Button
            fullWidth
            size="large"
            variant={"outlined"}
            color="primary"
            href="/products">
            Add product
          </Button>
        </Grid>
        <Grid item md={9} padding={2}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Bill Date</TableCell>
                  <TableCell align="center">Category</TableCell>
                  <TableCell align="center">Customer ID</TableCell>
                  <TableCell align="center">Customer Number</TableCell>
                  <TableCell align="center">Customer Purchase</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
