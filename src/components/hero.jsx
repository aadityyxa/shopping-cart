import Image from '../assets/images/hero-img.png'; 
import jacketImage from '../assets/images/3918605717_2_1_1.jpg'
import bwlady from '../assets/images/ulimg.jpg'
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import { Link } from 'react-router-dom';

function Hero() {

    return(
        <>
            <section>
                <img src="https://darkwool.github.io/shopping-cart/assets/innovate-text-gradient-cb0ba56e.png" alt="nowaitin" className="nav-background"/>

            </section>

            <div className="hero">
                <div className="hero-text-left">
                    <p>The new </p>
                    <p>winter &apos;23</p>
                    <p>collection</p>
                    <p className='desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos similique aspernatur <strong>shirts, sweatshirts, blazers and more </strong>provident possimus nihil quibusdam harum voluptatem, odio quidem consequuntur facilis reiciendis officia hic nulla animi minima repudiandae iusto recusandae.</p>

                    <Link to="/products/">
                        <button>
                            START SHOPPING
                            <Icon path={mdiArrowRight} size={0.8}></Icon>
                        </button>
                    </Link>
                </div>
                <div className="hero-image-right">
                    <img src={Image} alt="" />
                </div>
            </div>

                <section>
                    <div className="text-slider">
                        <h2>THE FASHION YOU DESERVE</h2>
                        <h2>THE FASHION YOU DESERVE</h2>
                    </div>
                </section>

                <section className='homepage-desc'>
                    <div className="section-image-left">
                        <img src={jacketImage} alt="" />
                    </div>
                    <div className="section-text-right">
                        <span className='section-text-right-heading'>Wear <span>confidence.</span></span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aperiam unde iusto labore, voluptate accusamus iste ut. Atque, impedit assumenda praesentium explicabo sequi rem excepturi maxime. Distinctio pariatur voluptatibus laborum, a quisquam suscipit numquam, repellat ducimus veniam perferendis est aliquid asperiores debitis autem? Unde laudantium quos accusamus neque! Velit consectetur eius ducimus ipsam iste commodi sunt ea! Odio, enim esse!</p>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt laborum libero delectus ea! Doloribus sapiente explicabo consequatur aliquid est fugit, nobis illo dolorum sequi ullam distinctio ea, quos iste atque quas sunt alias rerum unde autem nesciunt repellat. Eaque ab quis cum in veniam dicta sint corrupti a, exercitationem doloribus repudiandae architecto. Explicabo, perspiciatis possimus inventore molestias unde quo deleniti cupiditate dolores quis qui eum repudiandae repellendus, omnis numquam accusamus cum, tempore exercitationem saepe magnam reiciendis modi at blanditiis optio. Corrupti voluptates nesciunt nulla illum fugiat accusantium delectus maxime harum sapiente, eligendi excepturi architecto libero qui dolor quaerat voluptatem odio reiciendis culpa? Similique expedita ipsam eum, dicta odio cumque, consequuntur atque impedit laboriosam, perspiciatis quae beatae sit hic dolores adipisci.</p>

                        <button>DISCOVER THE NEW YOU</button>
                    </div>
                </section>

                <section className='homepage-randimg'>
                    <div className="homepage-randimg-text-left">
                    <div>
                        <p>Unabashed. Unafraid. Unashamed.</p>
                        <p>BEST IN CLASS <strong>FASHION</strong> </p>
                    </div>
                    </div>

                    <div className="homepage-randimg-img-right">
                        <img src={bwlady} alt="" />
                    </div>
                </section>



    
        </>
    )
}

export default Hero;