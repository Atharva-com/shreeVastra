import React from 'react'
import FullLayout from '../../src/layouts/full/FullLayout';
import { ThemeProvider } from "@mui/material/styles";
import { baselightTheme } from "../../src/theme/DefaultColors";
import {
  Container,
  Card,
  Grid,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Typography,
  Chip,
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  TableHead,
  Alert
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { IconDots, IconEdit, IconPlus, IconTrash } from "@tabler/icons-react";

const AllOrder = () => {
  const img1 =
    "https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-6.jpg";

  const img2 =
    "https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-2.jpg";

  const img3 =
    "https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-3.jpg";

  const img4 =
    "https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-4.jpg";

  const img5 =
    "https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-5.jpg";

  const rows = [
    {
      status: "active",
      avatar: img1,
      users: "4300",
      title: "Top Authors",
      subtitle: "Successful Fellas",
      teams: [
        {
          name: "Angular",
          bgcolor: "rgb(253,237,232)",
          textcolor: "rgb(250,137,107)"
        },
        {
          name: "PHP",
          bgcolor: "rgb(236,242,255)",
          textcolor: "rgb(93, 135, 255)"
        }
      ]
    },
    {
      status: "offline",
      avatar: img2,
      users: "1200",
      title: "Popular Authors",
      subtitle: "Most Successful",
      teams: [
        {
          name: "Bootstrap",
          bgcolor: "rgb(236,242,255)",
          textcolor: "rgb(93, 135, 255)"
        }
      ]
    },
    {
      status: "active",
      avatar: img3,
      users: "2000",
      title: "New Users",
      subtitle: "Awesome Users",
      teams: [
        {
          name: "Reactjs",
          bgcolor: "rgb(230,255,250)",
          textcolor: "rgb(19,222,185)"
        },
        {
          name: "Angular",
          bgcolor: "rgb(253,237,232)",
          textcolor: "rgb(250,137,107)"
        }
      ]
    },
    {
      status: "offline",
      avatar: img4,
      users: "1500",
      title: "Active Customers",
      subtitle: "Best Customers",
      teams: [
        {
          name: "Bootstrap",
          bgcolor: "rgb(236,242,255)",
          textcolor: "rgb(93, 135, 255)"
        }
      ]
    },
    {
      status: "active",
      avatar: img5,
      users: "9500",
      title: "Bestseller Theme",
      subtitle: "Amazing Templates",
      teams: [
        {
          name: "Angular",
          bgcolor: "rgb(253,237,232)",
          textcolor: "rgb(250,137,107)"
        },
        {
          name: "Reactjs",
          bgcolor: "rgb(230,255,250)",
          textcolor: "rgb(19,222,185)"
        }
      ]
    }
  ];

  const theme = baselightTheme;
  return (
    <ThemeProvider theme={theme}>
      <FullLayout>
        <Container fluid className='mt-20'>
          <Card variant="outlined">
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="subtitle1">Product Name</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle1">Product Id</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle1">Username</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle1">Price</Typography>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.title}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>
                        <Stack direction="row" spacing={2}>
                          <Avatar
                            src={row.avatar}
                            alt={row.avatar}
                            variant="rounded"
                            sx={{ width: 42, height: 42 }}
                          />
                          <Box>
                            <Typography variant="subtitle1" fontWeight={600}>
                              {row.title}
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                              {row.subtitle}
                            </Typography>
                          </Box>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack direction="row" spacing={1}>
                          {row.teams.map((team, i) => (
                            <Chip
                              label={team.name}
                              sx={{
                                backgroundColor: team.bgcolor,
                                color: team.textcolor,
                                fontSize: "11px"
                              }}
                              key={i}
                              size="small"
                            />
                          ))}
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Typography variant="subtitle1" color="textSecondary">
                          {row.users} Users
                        </Typography>
                      </TableCell>
                      <TableCell>
                        {/* <IconButton
                          id="basic-button"
                          aria-controls={open ? "basic-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                        >
                          <IconDots width={18} />
                        </IconButton> */}
                        {/* <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button"
                          }}
                        >
                          <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                              <IconPlus width={18} />
                            </ListItemIcon>
                            Add
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                              <IconEdit width={18} />
                            </ListItemIcon>
                            Edit
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                              <IconTrash width={18} />
                            </ListItemIcon>
                            Delete
                          </MenuItem>
                        </Menu> */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
          
        </Container>
      </FullLayout>
    </ThemeProvider>
  )
}

export default AllOrder


