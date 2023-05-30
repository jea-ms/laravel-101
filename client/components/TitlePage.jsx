const TitlePage = ({ title, showBtnAdd, onAdd, onCancel, hasUser }) => {
    let btnOptions = <></>
    if (hasUser) {
        btnOptions = (<button onClick={onCancel} className='red_btn'>Cancel</button>)
        if (showBtnAdd) {
            btnOptions = (<button onClick={onAdd} className='black_btn'>Add</button>)
        }
    }
    
    return (
        <div className='header_list md:px-20'>
            <h1 className="text-5xl Avenir font-semibold text-gray-900 md:mr-20">
                {title}
            </h1>
            {btnOptions}
        </div>
    )
}

export default TitlePage