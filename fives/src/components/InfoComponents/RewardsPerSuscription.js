import Image from 'next/image';
import { useHomeContext } from '../../store/Home';

const RewardField = ({ image }) => {
  const {
    media_image: { url, alt, title, dimensions },
  } = image;
  return (
    <div className="reward-field">
      <Image 
        src={url} 
        alt={alt} 
        title={title} 
        priority={false} 
        height={dimensions?.height} 
        width={dimensions?.width} 
      />
    </div>
  );
};

const RewardsPerSuscription = ({btn}) => {
  const { title_plus, featured_items, image_rewards, title_rewards } =
    useHomeContext();
  const splittedTitlePlus = title_plus.split(' ');

  const handleLoginLoyalty= () =>{
 
    document.querySelector(".loyalty-icon").click()
  }
 
  return (
    <section className="rewards-for">
      <div className="container">
        <div className="row">
          <div className="rewards-info col-md-4">
            <div className="title-plus">
              <div className="yellow-box">{splittedTitlePlus[0]}</div>
              <div className="orange-box">{splittedTitlePlus[1]}</div>
            </div>
            <div
              className="content-title"
              dangerouslySetInnerHTML={{ __html: title_rewards }}
            />
            <div className="rewards">
              <ul className="rewards-list">
                {featured_items.map((reward) => {
                  return (
                    <li
                      className="rewards-item"
                      key={reward}
                      dangerouslySetInnerHTML={{
                        __html: `${reward}`,
                      }}
                    />
                  );
                })}
              </ul>
              <div className = "bnt__login--loyalti">
                <button type="button" className = "btn-see-all" onClick={()=>{handleLoginLoyalty()}}>{btn?.text}</button>
              </div>
            </div>
          </div>
          <div className="rewards-images col-md-8">
            <div className="rewards-images-content">
              {image_rewards.map((image, idx) => (
                <RewardField image={image} key={`reward-image${idx}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsPerSuscription;
