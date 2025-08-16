"use client";
import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Avatar,
  Chip,
  TextField,
  IconButton,
  Paper,
  Alert,
  CircularProgress,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import {
  GitHub,
  LinkedIn,
  Email,
  Code,
  Web,
  School,
  Download,
  Work,
  Timeline as TimelineIcon,
  Settings,
} from "@mui/icons-material";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("https://formspree.io/f/mqaloaoz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again or contact me directly at ermanos.rap@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.3)",
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h1" component="h1" gutterBottom>
                Hello, I&apos;m{" "}
                <Typography component="span" variant="h1" color="secondary">
                  Ermanos
                </Typography>
              </Typography>
              <Typography variant="h4" component="h2" gutterBottom>
                Full Stack Developer
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.2rem", mb: 4, opacity: 0.9 }}
              >
                I create beautiful, responsive web applications using modern
                technologies. Passionate about clean code, user / developer
                experience, and innovative solutions.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  sx={{
                    backgroundColor: "secondary.main",
                    "&:hover": { backgroundColor: "secondary.dark" },
                  }}
                >
                  View My Work
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Download />}
                  component="a"
                  href="/cv.pdf"
                  download="Ermanos_CV.pdf"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    "&:hover": {
                      borderColor: "secondary.main",
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  Download CV
                </Button>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar
                  src="/avatar.jpg"
                  alt="Ermanos Profile Picture"
                  sx={{
                    width: 300,
                    height: 300,
                    border: "4px solid white",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  }}
                >
                  <Typography variant="h1">ER</Typography>
                </Avatar>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ py: 10, backgroundColor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
            textAlign="center"
            gutterBottom
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}
          >
            Software Developer with a demonstrated working experience in the
            information technology and services industry. Skilled in
            JavaScript/Typescript, Application Programming Interfaces, and Full
            Stack Development. Strong engineering professional with an
            integrated Master&apos;s degree focused in Computer Engineering from
            the University of Patras.
          </Typography>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: "100%", textAlign: "center", p: 3 }}>
                <Web sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  Frontend
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  React, Next.js, TypeScript, Material-UI, Vue.js
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: "100%", textAlign: "center", p: 3 }}>
                <Code sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  Backend
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Node.js, Express, Python, PostgreSQL, MongoDB
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: "100%", textAlign: "center", p: 3 }}>
                <Settings sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  Tools & Others
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Git, Docker, Firebase, OpenAI API, Agile Development
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Career Timeline Section */}
      <Box id="timeline" sx={{ py: 10, backgroundColor: "background.paper" }}>
        <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
          Career Timeline
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mb: 6, color: "text.secondary" }}
        >
          My journey through education and professional experience
        </Typography>

        <Box sx={{ maxWidth: 900, mx: "auto" }}>
          <Timeline position="alternate">
            {[
              {
                year: "2011 - 2019",
                title: "MSc Computer Engineer and Informatics",
                company: "University of Patras",
                description:
                  "Graduated with an integrated Master's degree in the Department of Computer Engineering and Informatics, building a strong foundation in software development and computer science principles.",
                type: "education",
              },
              {
                year: "2020 - 2021",
                title: "CoE Developer",
                company: "IBM",
                description:
                  "Worked as a Center of Excellence Developer, gaining experience in enterprise-level software development, Banking and Fintech.",
                type: "work",
              },
              {
                year: "2021 - 2022",
                title: "Frontend Developer",
                company: "Greek Yelllow Pages (xo.gr)",
                description:
                  "Specialized in frontend development, creating responsive and user-friendly web interfaces using modern JavaScript frameworks.",
                type: "work",
              },
              {
                year: "2022 - 2025",
                title: "Fullstack Software Engineer",
                company: "Upstream",
                description:
                  "Contributed to the development of a sophisticated mobile marketing automation SaaS platform, actively used by international mobile network operators. ",
                type: "work",
              },
              {
                year: "2025 - Present",
                title: "Senior Frontend Engineer",
                company: "Orderit AI",
                description:
                  "Leading frontend development initiatives and implementing cutting-edge AI-powered user interfaces.",
                type: "work",
              },
              {
                year: "Present - Future",
                title: "Your Company Here",
                company: "Let's Connect!",
                description:
                  "Ready for the next challenge! Looking for opportunities to contribute my skills and continue growing as a software engineer.",
                type: "future",
              },
            ].map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align={index % 2 === 0 ? "right" : "left"}
                  variant="body2"
                  color="text.secondary"
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color:
                        item.type === "education"
                          ? "secondary.main"
                          : item.type === "future"
                          ? "warning.main"
                          : "primary.main",
                      fontWeight: "bold",
                    }}
                  >
                    {item.year}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot
                    color={
                      item.type === "education"
                        ? "secondary"
                        : item.type === "future"
                        ? "warning"
                        : "primary"
                    }
                    variant="filled"
                  >
                    {item.type === "education" ? (
                      <School />
                    ) : item.type === "future" ? (
                      <TimelineIcon />
                    ) : (
                      <Work />
                    )}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      backgroundColor: "background.paper",
                      borderLeft: `4px solid`,
                      borderLeftColor:
                        item.type === "education"
                          ? "secondary.main"
                          : item.type === "future"
                          ? "warning.main"
                          : "primary.main",
                    }}
                  >
                    <Typography variant="h6" component="h3" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "medium", mb: 1 }}
                      color="text.secondary"
                    >
                      {item.company}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Box>

      {/* Projects Section */}
      <Box id="projects" sx={{ py: 10, backgroundColor: "grey.50" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
            textAlign="center"
            gutterBottom
          >
            Featured Projects
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{ mb: 6, color: "text.secondary" }}
          >
            Here are some of my recent projects that I have worked on that
            showcase my skills and experience.
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: "Grow (Upstream)",
                description: "A full-stack e-commerce solution.",
                tech: [
                  "TypeScript",
                  "Next.js",
                  "React",
                  "Node.js",
                  "Express",
                  "Material-UI",
                  "PostgreSQL",
                ],
                screenshots: [
                  "/projects/grow/grow-1.webp",
                  "/projects/grow/grow-2.png",
                  "/projects/grow/grow-3.png",
                ],
              },
              {
                title: "Orderit (Orderit AI)",
                description:
                  "An AI-powered ordering platform with intelligent recommendations and real-time processing.",
                tech: [
                  "TypeScript",
                  "React",
                  "Material-UI",
                  "OpenAI API",
                  "Node.js",
                  "Express",
                  "Python",
                  "MongoDB",
                ],
                screenshots: [
                  "/projects/orderit/orderit-1.png",
                  "/projects/orderit/orderit-2.png",
                  "/projects/orderit/orderit-3.png",
                  "/projects/orderit/orderit-4.png",
                ],
              },
              {
                title: "Fire Alert Mobile App",
                description:
                  "A comprehensive fire detection and alert system with real-time monitoring. Full scale schedule functionality of watchtower shifts",
                tech: [
                  "React Native",
                  "Expo",
                  "Firebase",
                  "NASA's FIRMS API",
                  "Node.js",
                ],
                screenshots: [
                  "/projects/fire-alert/fire-alert-1.jpg",
                  "/projects/fire-alert/fire-alert-2.jpg",
                  "/projects/fire-alert/fire-alert-3.jpg",
                  "/projects/fire-alert/fire-alert-4.jpg",
                  "/projects/fire-alert/fire-alert-5.jpg",
                  "/projects/fire-alert/fire-alert-6.jpg",
                ],
              },
            ].map((project, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <ProjectCarousel
                    images={project.screenshots}
                    projectTitle={project.title}
                    objectFit={"contain"}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {project.tech.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{ mr: 1, mb: 1 }}
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        sx={{ py: 10, backgroundColor: "primary.main", color: "white" }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h2"
            textAlign="center"
            gutterBottom
          >
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{ mb: 6, opacity: 0.9 }}
          >
            I&apos;m always interested in new opportunities and exciting
            projects. Let&apos;s connect and discuss how we can work together!
          </Typography>

          <Card sx={{ p: 4 }}>
            {submitStatus.type && (
              <Alert
                severity={submitStatus.type}
                sx={{ mb: 3 }}
                onClose={() => setSubmitStatus({ type: null, message: "" })}
              >
                {submitStatus.message}
              </Alert>
            )}
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    variant="outlined"
                    required
                    disabled={isSubmitting}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    variant="outlined"
                    required
                    disabled={isSubmitting}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                    disabled={isSubmitting}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    disabled={isSubmitting}
                    sx={{ mt: 2 }}
                    startIcon={
                      isSubmitting ? <CircularProgress size={20} /> : null
                    }
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Card>

          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Typography variant="h6" gutterBottom>
              Connect with me
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <IconButton
                sx={{ color: "white" }}
                component="a"
                href="https://github.com/m4nos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub />
              </IconButton>
              <IconButton
                sx={{ color: "white" }}
                component="a"
                href="https://linkedin.com/in/ermanos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                sx={{ color: "white" }}
                component="a"
                href="mailto:ermanos.rap@gmail.com"
              >
                <Email />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          py: 3,
          backgroundColor: "grey.900",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="body2">
            © 2025 Ermanos Rapsomanikis. Built with Next.js and Material-UI.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
