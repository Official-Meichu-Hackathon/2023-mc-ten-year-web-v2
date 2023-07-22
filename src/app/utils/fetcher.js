export const fetcher = (url) => 
    fetch(url, {
        headers: {
            "X-Api-Header": "2023_mc_ten_year_web"
        }
    }).then((res) => res.json());