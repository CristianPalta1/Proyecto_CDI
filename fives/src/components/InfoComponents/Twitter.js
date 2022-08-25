import { Timeline } from "react-twitter-widgets";

//Componente funcional encargado de las publicaciones del elempleo en twitter.

const Twitter = ({title}) => {
  
  return (
    <div className="twitter-content">
        <div className="content-title"
            dangerouslySetInnerHTML={{
              __html:title
            }}></div>
        <Timeline
            dataSource={{
                sourceType: "profile",
                screenName: "TheFivesHotels",
                noFooter:true,
            }}
           
            options={{
                height: "450",
                chrome:"nofooter noheaders"
            }}

        />
    </div>
  );
};

export default Twitter;