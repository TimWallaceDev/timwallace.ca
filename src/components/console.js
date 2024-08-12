export function consoleGreeting() {
    const styles = [
        "background-color: white",
        "padding: 10px 20px",
        "font-weight: bold",
        "font-family: monospace",
        "border-radius: 20px",
        "text-align: center",
        "margin: 12px",
        "color: black",
        "font-size: 12px"
    ]
    // Styled message
    console.log("%c🔍 Curiosity brought you here, huh?\nStay curious, stay awesome. 😎", styles.join(";"));
}