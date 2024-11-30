import { Box, IconButton, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0f172a",
        color: "white",
        padding: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <IconButton color="inherit" href="https://t.me/KaPodgaets">
          <TelegramIcon />
        </IconButton>
        <IconButton color="inherit" href="https://github.com/KaPodgaets">
          <GitHubIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.linkedin.com/in/konstantin-podgaets/"
        >
          <LinkedInIcon />
        </IconButton>
      </div>
      <Typography variant="body2">© 2024, Podgaets Konstantin</Typography>
    </Box>
  );
}
