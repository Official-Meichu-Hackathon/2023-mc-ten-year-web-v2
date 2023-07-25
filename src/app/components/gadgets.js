export function Load() {
    return (
        <div className="grid inset-0 place-content-center">
            <span className="text-2xl">Loading...</span>
        </div>
    );
}

export function LoadFailed() {
    return (
        <div className="grid inset-0 place-content-center font-medium">
            <span className="text-2xl">Failed to load :(</span>
        </div>
    );
}

export function LoadCustom({msg}) {
    return (
        <div className="grid inset-0 place-content-center font-medium">
            <span className="text-2xl">{msg}</span>
        </div>
    );
}