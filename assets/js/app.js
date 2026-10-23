// ==========================================================
// ヘッダーの名前のまわりのキラキラ（tsParticles）
// 表示する場所：index.html の <span id="particles">
// ==========================================================
(async () => {
    // tsParticles の準備（slim 版の機能を読み込む）
    await loadSlim(tsParticles);

    await tsParticles.load({
        id: "particles",  // HTML の id と同じ名前にする
        options: {
            fullScreen: { enable: false },  // 画面全体ではなく、#particles の中だけに出す

            particles: {
                // 粒の数
                number: { value: 60 },

                // 粒の色
                color: { value: "#ffffff" },

                // 形：とがりが4つの星（✦）。inset が大きいほど鋭くなる
                shape: {
                    type: "star",
                    options: {
                        star: { sides: 4, inset: 6 }
                    }
                },

                // 大きさ（min〜max のランダム）
                size: { value: { min: 0.5, max: 1.5 } },

                // 明るさ：0〜1 を行き来して瞬く。speed が大きいほど速く瞬く
                opacity: {
                    value: { min: 0, max: 1 },
                    animation: { enable: true, speed: 6 }
                },

                // 粒のまわりの光
                shadow: {
                    enable: true,
                    color: "#ffffff",
                    blur: 20
                },

                // 動き：右へ流れる
                move: {
                    enable: true,
                    speed: 3,
                    direction: "right"
                }
            }
        }
    });
})();
