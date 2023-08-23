import { useState,useEffect} from 'react';

function useRWD(){
    const [mobile, setMobile] = useState(0);

    const handleRWD = () => {
        const w = window.innerWidth;
        if(w >= 1400)
            setMobile(5);
        else if(w >= 1200)
            setMobile(4);
        else if(w >= 992)
            setMobile(3);
        else if(w >= 768)
            setMobile(2);
        else if(w >= 576)
            setMobile(1);
        else
            setMobile(0);
    }

    useEffect(() => {
        window.addEventListener('resize', handleRWD);
        handleRWD();
        return(() => {
            window.removeEventListener('resize', handleRWD);
        })
    }, []);

    return mobile;
}

export default useRWD;

/*
sm: "576px",
md: "768px",
lg: "992px",
xl: "1200px",
"2xl": "1400px",
*/