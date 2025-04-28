import { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        setIsVisible(window.scrollY > 300);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const clickForScroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                backgroundColor: "rgb(245, 230, 200, 0.8)",
                borderRadius: "50%",
                padding: "12px",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
                zIndex: 1000,
                display: isVisible ? "flex" : "none",
                alignItems: "center",
                justifyContent: "center",
                transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
                cursor: "pointer",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scale(1)" : "scale(0.9)",
            }}
            onClick={clickForScroll}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgb(245, 230, 200, 1)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgb(245, 230, 200, 0.8)")}
        >
            <ArrowUpwardIcon style={{ color: "rgb(58, 15, 120)", fontSize: "28px" }} />
        </div>
    );
}

export default ScrollToTop;
