export function Load() {
    return (
        <div className="grid inset-0 place-content-center">
            <span>Loading...</span>
        </div>
    );
}

export function LoadFailed() {
    return (
        <div className="grid inset-0 place-content-center">
            <span>Failed to load :(</span>
        </div>
    );
}

export function LoadCustom({msg}) {
    return (
        <div className="grid inset-0 place-content-center">
            <span>{msg}</span>
        </div>
    );
}

export function TitleDecoCustom({size}) {
    return (
        <div className="relative">
            <span className={`inline font-bold tracking-[0.4em] leading-normal`}
                  style={{ fontSize: `${size}em`, writingMode: "vertical-rl" }}>
                多原<br />方程式
            </span>
            <div className={`absolute right-[0.03em] bg-accent -translate-x-[0.2em]`}
                 style={{ width: `${size}em`, height: `${size / 2}em`, top: `${2 * (size + 1.05 * size * 0.4) + 0.3}em` }}></div>
        </div>
    );
}