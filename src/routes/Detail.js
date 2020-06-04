import React from "react";
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }

    render(){
        const {location} = this.props;
        console.log(location.state);

        if(location.state){
            return (
                <div className = "detail">
                    <header className = "detail__title">
                        {location.state.title}
                    </header>

                    <section className = "content">
                        <nav className = "detail__img">
                            <img src = {location.state.poster}/> 
                        </nav>

                        <main className = "detail__description">
                            {location.state.description}
                        </main>

                        <aside className = "detail__genres">
                            <ul className = "genres">        
                                {location.state.genres.map((genre, index) => (
                                   <li key = {index}>{genre}</li> 
                                ))}
                            </ul>
                        </aside>
                    </section>
                </div>
                )
        }else{
            return null;
        }
    }
}

export default Detail;