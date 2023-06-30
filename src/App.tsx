import { DynamicStyleComponent } from "./utils";

const App = () => {
    return (
        <>
            <div
                style={{
                    display: "block",
                    width: "100%",
                    "background-color": "black",
                    opacity: "0.3",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    "z-index": "-1",
                }}
            />
            <div
                style={{
                    height: "100vh",
                    "justify-content": "center",
                    "align-items": "center",
                    "text-shadow": "2px 2px 5px black",
                    color: "white",
                }}
            >
                <img
                    style={{
                        "border-radius": "50%",
                        height: "175px",
                        width: "auto",
                        margin: "30px",
                    }}
                    src="src/assets/linkedInPic.jpg"
                    alt="Me"
                />
                <h1
                    style={{
                        "font-size": "50px",
                    }}
                >
                    Benjamin Kern.
                </h1>
                <span>Nice to meet you.</span>

                <div
                    style={{
                        "flex-direction": "row",
                    }}
                >
                    <CircleLink
                        href="https://www.linkedin.com/in/benjamin-j-kern/"
                        icon="fa-linkedin"
                    />
                    <CircleLink
                        href="https://www.github.com/benjaminjkern"
                        icon="fa-github"
                    />
                    <CircleLink
                        href="mailto:benkern@pixelgate?Subject=Hi Ben, you seem cool"
                        icon="fa-envelope"
                    />
                </div>
            </div>

            <div
                style={{
                    height: "75px",
                    background: "linear-gradient(#0000, #222)",
                }}
            />
            <div
                style={{
                    color: "#a185c5",
                    "text-align": "center",
                    "background-color": "#222",
                    padding: "50px 0",
                    "align-items": "center",
                }}
            >
                <h1 style={{ "margin-bottom": "10px" }}>About Me</h1>
                <span>LMU Computer Science and Physics '20.</span>
                <span>I do projects having to do with those things.</span>
                <DynamicStyleComponent
                    elementName="a"
                    href="/resume"
                    style={{
                        "text-decoration": "none",
                        padding: "5px",
                        "border-radius": "5px",
                        color: "black",
                        margin: "20px",
                        "max-width": "200px",
                        width: "100%",
                        transition: "background-color 0.1s",
                    }}
                    dynamicStyle={{
                        "background-color": "#a185c5",
                        "&:hover": {
                            backgroundColor: "#796496",
                        },
                    }}
                >
                    RESUMÉ
                </DynamicStyleComponent>
            </div>
        </>
    );
};

const CircleLink = (props: { href: string; icon: string }) => {
    return (
        <DynamicStyleComponent
            elementName="a"
            href={props.href}
            style={{
                display: "flex",
                "justify-content": "center",
                "align-items": "center",
                "text-decoration": "none",
                height: "52px",
                width: "52px",
                "font-size": "30px",
                "border-radius": "50%",
                color: "black",
                "margin-right": "10px",
                "margin-left": "10px",
                "margin-top": "15px",
                "text-shadow": "0px 0px 5px black",
                transition: "background-color 0.1s",
            }}
            dynamicStyle={{
                "background-color": "white",
                "&:hover": {
                    "background-color": "#a185c5",
                },
            }}
        >
            <i class={`fa ${props.icon}`} aria-hidden="true" />
        </DynamicStyleComponent>
    );
};

export default App;
