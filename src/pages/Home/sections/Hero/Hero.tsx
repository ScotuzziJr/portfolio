import { Button, Container, Grid2, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import { DownloadOutlined, EmailOutlined } from "@mui/icons-material"

const Hero = () => {
    // styled components
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center"
    }))

    const StyledImage = styled("img")(({ theme }) => ({
        width: "100%",
        borderRadius: "50%",
        border: `5px solid ${theme.palette.secondary.main}`
    }))

    return (
        <>
            <StyledHero>
                {/*defining the limits of my content to avoid distortion on big screens*/}
                <Container
                    maxWidth="lg"
                > 

                    {/*using grid to assure responsiveness*/}
                    <Grid2 
                        container 
                        display="flex"
                        alignItems="center"
                        spacing={2}
                    > 
                        <Grid2 
                            size={{ 
                                xs: 12,
                                md: 5 
                            }}
                        >
                            <StyledImage src={Avatar} />
                        </Grid2>

                        <Grid2 
                            size={{ 
                                xs: 12,
                                md: 7
                            }}
                        >
                            <Typography
                                variant="h2"
                                component="h1"
                                color="secondary"
                                textAlign="center"
                                fontWeight="medium"
                            >
                                Márcio Scotuzzi Jr.
                            </Typography>

                            <Typography
                                variant="h2"
                                color="secondary"
                                textAlign="center"
                                >
                                I'm a software developer
                            </Typography>

                            <Grid2 
                                container
                                display="flex"
                                justifyContent="center"
                                spacing={3}
                                pt={2}
                            >
                                <Grid2 
                                    size={{
                                        xs: 12,
                                        md: 4
                                    }}
                                    display="flex"
                                    justifyContent="center"
                                >
                                    <Button
                                        color="secondary"
                                        variant="outlined"
                                    >
                                        <DownloadOutlined />
                                        Download CV
                                    </Button>
                                </Grid2>

                                <Grid2
                                    size={{
                                        xs: 12,
                                        md: 4
                                    }}
                                    display="flex"
                                    justifyContent="center"
                                >
                                    <Button
                                        color="secondary"
                                        variant="outlined"
                                    >
                                        <EmailOutlined />    
                                        Contact me
                                    </Button>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
