(async () => {
    await loadSlim(tsParticles);

    await tsParticles.load({
        id: "particles",
        options: {
            fullScreen: { enable: false },
            particles: {
                number: { value: 60 },
                color: { value: "#ffffff" },
                shape: {
                    type: "star",
                    options: {
                        star: { sides: 4, inset: 6 }
                    }
                },
                size: { value: { min: 0.5, max: 1.5 } },
                opacity: {
                    value: { min: 0, max: 1 },
                    animation: { enable: true, speed: 6 }
                },
                shadow: {
                    enable: true,
                    color: "#ffffff",
                    blur: 20
                },
                move: {
                    enable: true,
                    speed: 3,
                    direction: "right"
                }
            }
        }
    });
})();