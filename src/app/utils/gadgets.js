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