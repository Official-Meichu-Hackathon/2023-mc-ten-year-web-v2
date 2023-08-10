    <button 
    className="flex items-center justify-center ml-1 mt-2 mb-2"
    onClick={() => {setFilterViewMode(!filterViewMode)}}
    >
    {filterViewMode ? (
    <>
        <div style={{ position: 'absolute', zIndex: 1 }}>
        <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="23" height="25" rx="6" fill="#B580FF" stroke="#464A53" stroke-width="2"/>
        </svg>
        </div>
        <div style={{ position: 'absolute', zIndex: 2 }}>
        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.3758 12.1912L2.76122 8.2875C2.56645 8.07715 2.30229 7.95897 2.02684 7.95897C1.7514 7.95897 1.48724 8.07715 1.29247 8.2875C1.0977 8.49785 0.988281 8.78314 0.988281 9.08062C0.988281 9.22792 1.01514 9.37377 1.06734 9.50986C1.11953 9.64594 1.19603 9.76959 1.29247 9.87374L5.64664 14.5762C6.05289 15.015 6.70914 15.015 7.11539 14.5762L18.1362 2.67375C18.331 2.4634 18.4404 2.1781 18.4404 1.88062C18.4404 1.58314 18.331 1.29785 18.1362 1.0875C17.9415 0.877146 17.6773 0.758972 17.4018 0.758972C17.1264 0.758972 16.8622 0.877146 16.6675 1.0875L6.3758 12.1912Z" fill="#464A53"/>
        </svg>
        </div>
    
        &nbsp;&nbsp;2022
        
        
    </>
    
    ) : (
    <>
    <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="23" height="25" rx="6" fill="#EBECF2" stroke="#464A53" stroke-width="2"/>
    </svg>
    &nbsp;&nbsp;2022
    </>
    
    )
    }
    </button>



    {/*創客組 */}
    <div style={{ flex: 0.01 }}></div>
    <button 
    className="flex items-center justify-center ml-1 mt-2 mb-2"
    onClick={() => setCreatorGroup(!creatorGroup)}
    >
    {creatorGroup ? (
    <>
        <div style={{ position: 'absolute', zIndex: 1 }}>
        <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="23" height="25" rx="6" fill="#B580FF" stroke="#464A53" stroke-width="2"/>
        </svg>
        </div>
        <div style={{ position: 'absolute', zIndex: 2 }}>
        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.3758 12.1912L2.76122 8.2875C2.56645 8.07715 2.30229 7.95897 2.02684 7.95897C1.7514 7.95897 1.48724 8.07715 1.29247 8.2875C1.0977 8.49785 0.988281 8.78314 0.988281 9.08062C0.988281 9.22792 1.01514 9.37377 1.06734 9.50986C1.11953 9.64594 1.19603 9.76959 1.29247 9.87374L5.64664 14.5762C6.05289 15.015 6.70914 15.015 7.11539 14.5762L18.1362 2.67375C18.331 2.4634 18.4404 2.1781 18.4404 1.88062C18.4404 1.58314 18.331 1.29785 18.1362 1.0875C17.9415 0.877146 17.6773 0.758972 17.4018 0.758972C17.1264 0.758972 16.8622 0.877146 16.6675 1.0875L6.3758 12.1912Z" fill="#464A53"/>
        </svg>
        </div>
    
        &nbsp;&nbsp;創客組              
    </>
    
    ) : (
    <>
    <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="23" height="25" rx="6" fill="#EBECF2" stroke="#464A53" stroke-width="2"/>
    </svg>
    &nbsp;&nbsp;創客組
    </>
    
    )
    }            
    </button>
    {/*競賽內容 */}
    <div style={{ flex: 0.01 }}></div>

    <button 
    className="flex items-center justify-center ml-1 mt-2 mb-2"
    onClick={() => setCompetitionContent(!competitionContent)}
    >
    {competitionContent ? (
    <>
        <div style={{ position: 'absolute', zIndex: 1 }}>
        <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="23" height="25" rx="6" fill="#B580FF" stroke="#464A53" stroke-width="2"/>
        </svg>
        </div>
        <div style={{ position: 'absolute', zIndex: 2 }}>
        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.3758 12.1912L2.76122 8.2875C2.56645 8.07715 2.30229 7.95897 2.02684 7.95897C1.7514 7.95897 1.48724 8.07715 1.29247 8.2875C1.0977 8.49785 0.988281 8.78314 0.988281 9.08062C0.988281 9.22792 1.01514 9.37377 1.06734 9.50986C1.11953 9.64594 1.19603 9.76959 1.29247 9.87374L5.64664 14.5762C6.05289 15.015 6.70914 15.015 7.11539 14.5762L18.1362 2.67375C18.331 2.4634 18.4404 2.1781 18.4404 1.88062C18.4404 1.58314 18.331 1.29785 18.1362 1.0875C17.9415 0.877146 17.6773 0.758972 17.4018 0.758972C17.1264 0.758972 16.8622 0.877146 16.6675 1.0875L6.3758 12.1912Z" fill="#464A53"/>
        </svg>
        </div>
    
        &nbsp;&nbsp;競賽內容             
    </>
    
    ) : (
    <>
    <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="23" height="25" rx="6" fill="#EBECF2" stroke="#464A53" stroke-width="2"/>
    </svg>
    &nbsp;&nbsp;競賽內容
    </>
    
    )
    }            
    </button>

    {/*報名相關 */}
    <button 
    className="flex items-center justify-center ml-1 mt-2 mb-2"
    onClick={() => setRegistrationRelated(!registrationRelated)}
    >
    {registrationRelated ? (
    <>
        <div style={{ position: 'absolute', zIndex: 1 }}>
        <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="23" height="25" rx="6" fill="#B580FF" stroke="#464A53" stroke-width="2"/>
        </svg>
        </div>
        <div style={{ position: 'absolute', zIndex: 2 }}>
        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.3758 12.1912L2.76122 8.2875C2.56645 8.07715 2.30229 7.95897 2.02684 7.95897C1.7514 7.95897 1.48724 8.07715 1.29247 8.2875C1.0977 8.49785 0.988281 8.78314 0.988281 9.08062C0.988281 9.22792 1.01514 9.37377 1.06734 9.50986C1.11953 9.64594 1.19603 9.76959 1.29247 9.87374L5.64664 14.5762C6.05289 15.015 6.70914 15.015 7.11539 14.5762L18.1362 2.67375C18.331 2.4634 18.4404 2.1781 18.4404 1.88062C18.4404 1.58314 18.331 1.29785 18.1362 1.0875C17.9415 0.877146 17.6773 0.758972 17.4018 0.758972C17.1264 0.758972 16.8622 0.877146 16.6675 1.0875L6.3758 12.1912Z" fill="#464A53"/>
        </svg>
        </div>
    
        &nbsp;&nbsp;報名相關            
    </>
    
    ) : (
    <>
    <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="23" height="25" rx="6" fill="#EBECF2" stroke="#464A53" stroke-width="2"/>
    </svg>
    &nbsp;&nbsp;報名相關
    </>
    
    )
    }            
    </button>


    {/*其他 */}
    <button 
    className="flex items-center justify-center ml-1 mt-2 mb-2"
    onClick={() => setOther(!other)}
    >
    {other ? (
    <>
        <div style={{ position: 'absolute', zIndex: 1 }}>
        <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="23" height="25" rx="6" fill="#B580FF" stroke="#464A53" stroke-width="2"/>
        </svg>
        </div>
        <div style={{ position: 'absolute', zIndex: 2 }}>
        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.3758 12.1912L2.76122 8.2875C2.56645 8.07715 2.30229 7.95897 2.02684 7.95897C1.7514 7.95897 1.48724 8.07715 1.29247 8.2875C1.0977 8.49785 0.988281 8.78314 0.988281 9.08062C0.988281 9.22792 1.01514 9.37377 1.06734 9.50986C1.11953 9.64594 1.19603 9.76959 1.29247 9.87374L5.64664 14.5762C6.05289 15.015 6.70914 15.015 7.11539 14.5762L18.1362 2.67375C18.331 2.4634 18.4404 2.1781 18.4404 1.88062C18.4404 1.58314 18.331 1.29785 18.1362 1.0875C17.9415 0.877146 17.6773 0.758972 17.4018 0.758972C17.1264 0.758972 16.8622 0.877146 16.6675 1.0875L6.3758 12.1912Z" fill="#464A53"/>
        </svg>
        </div>
    
        &nbsp;&nbsp;其他           
    </>
    
    ) : (
    <>
    <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="23" height="25" rx="6" fill="#EBECF2" stroke="#464A53" stroke-width="2"/>
    </svg>
    &nbsp;&nbsp;其他
    </>
    
    )
    }            
    </button>