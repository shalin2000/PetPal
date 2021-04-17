import React, { Component } from 'react';

import '../CSS/FAQ.css';
import Header from './Header';

class FAQ extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render (){
        return(
            <div className="faq">
                {/* uses the header.js file to get the burger menu */}
                <Header />

                <h2 style={{textAlign: 'center', paddingTop: '3%'}}>FAQ</h2>

                {/* Q&A used from link below */}
                {/* https://www.wkanimalhospital.com/instructionsheet/frequently-asked-questions-new-dog-owners */}
                {/* https://getyourpet.com/q-buying-pet-store-vs-adopting/ */}
                <div class="allQA">
                    <h3 class="categoryText">Vaccinations</h3>
                    <h4>Why are vaccinations necessary?</h4>
                    <p>Vaccinations help protect your pet from a number of potentially serious and even fatal diseases.
                        Every pet should be vaccinated - viruses like parvo and distemper are extremely contagious and even
                        indoor dogs can accidentally contact a rabid bat. Your veterinarian is the best resource for more
                        information on these diseases.
                    </p>
                    <h4>How do vaccinations work?</h4>
                    <p>Vaccines contain viruses or bacteria that have been modified so that they will not cause disease.
                        When an animal is vaccinated, it stimulates the animal's immune system to mount a response against
                        the bacteria or virus in question. If the dog or cat is later exposed to that disease, immune system will
                        react quickly to destroy the disease-causing agent.
                    </p>
                    <h4>Are vaccines safe?</h4>
                    <p>Although your veterinarian cannot guarantee that a vaccine will fully protect an animal against a given
                        disease, vaccinations have proven to be the simplest, safest and most effective means of preventing a
                        number of diseases in pets. Despite your veterinarian's efforts to design a safe vaccination protocol
                        for every pet, vaccine reactions can and do occur. Thankfully, they are not common. Like a drug, a
                        vaccine is capable of causing an adverse reaction. Some of these reactions are mild (some discomfort
                        at the injection site, lethargy or loss of appetite for a day or so). Some of these reactions are more
                        severe (allergic reaction, immunologic reactions). If your pet has reacted to a vaccine in the past,
                        inform your veterinarian.
                    </p>
                    <h4>Why does my pet need regular booster vaccinations for the same disease?</h4>
                    <p>Just like human babies, your puppy needs a series of vaccines to develop proper immunity to these
                        diseases. Your veterinarian will give your pet a series of vaccines spread over a period of 6 to 16
                        weeks of age, to provide your pet with the best possible protection.
                        It is very important that you follow the vaccination schedule provided by your veterinarian. Missing a
                        vaccine booster or being more than a few days late could put your pet at risk of contracting disease.
                        Puppies and kittens should not be exposed to unvaccinated dogs and cats, sick dogs and cats, or
                        places where dogs and cats roam (public parks etc.) until they have completed their puppy or kitten
                        series of vaccinations.
                    </p>
                    <br></br>
                    
                    <h3 class="categoryText">Adopting VS Buying</h3>
                    <h4>Where do pet stores pets come from?</h4>
                    <p>Pets that are found at your local pet store usually come from a puppy miller —someone who breeds and sells dogs, cats, and other animals for profit. These animals are often bred in harsh conditions and made to reproduce quickly. This makes for a miserable life for the adult female, forced to endure one pregnancy after another until her value is spent and she is discarded and replaced.</p>
                    <h4>Why is breeding “bad”?</h4>
                    <p>Puppy millers who breed for profit are unconcerned with the physical or mental welfare of their breeding dogs. Many puppy millers keep the animals in small cages, where they receive little to no socialization and often develop skin conditions, infections, and other health issues. They also may become malnourished, dehydrated, and severely depressed. There are reputable breeders out there, but most do not sell their “inventory” to places like your local pet store.</p>
                    <h4>Why is it “bad” to buy pets from the pet store?</h4>
                    <p>Buying a cat or dog from the pet store only perpetuates the cycle of breeding and contributes to the practice of animal cruelty. By declining to  buy your pet and support these puppy millers, you are taking a stand against animal cruelty and the ongoing problem of pet overpopulation.</p>
                    <h4>Don’t pet store pets need homes too?</h4>
                    <p>Yes, they do; but while the pets at the pet store are innocent parties, and are certainly not at fault for being there, they represent a bigger issue in the animal welfare industry. Buying a pet from a store puts more profits into the pockets of breeders and gives them incentive to continue doing what they do. It’s time to break the cycle and opt to adopt.</p>
                    <h4>What are the benefits to adopting a pet versus buying one?</h4>
                    <li>Save money – Organizations like getyourpet.com charge considerably less than pet stores or breeders. (For more info on Get Your Pet’s adoption fee, see What Does it Cost?)</li>
                    <li>Save a life – Saving a life is as easy as adopting a pet in need of a home. Whether you’re saving a pet from the shelter, or adopting one before they get there, you’re helping a lovable pet get a well-deserved second chance.</li>
                    <li>Stand up against animal cruelty – Take a stand against animal cruelty and help end the suffering of puppy mill dogs. Adopt, don’t shop!</li>
                    <li>Gain a new best friend – Pets that have been rescued or adopted tend to be most grateful for a second chance at life. Take in a new best friend and get ready to receive all the love in the world right back.</li>
                    <li>Spread the word – Spreading the word that you’ve adopted a pet helps to spread the message and helps make rescuing or adopting more accepted as the right thing to do.</li>
                    <br></br>

                    <h3 class="categoryText">Diet and Nutrition</h3>
                    <h4>What should I feed my new puppy?</h4>
                    <p>Good nutrition is extremely important for pets. With so many different options available, choosing the
                        right food can be confusing. Be aware of marketing and trends so prevalent in the pet food industry.
                        Puppies should receive a high quality commercial “growth” food. These foods contain higher levels of
                        protein, calories and minerals than adult diets. Large and giant breed puppies should be fed a diet
                        designed for their unique needs. These are generally labelled “for Large Breed Dogs”. Your veterinarian
                        is your best source of information about pet nutrition.
                    </p>
                    <h4>What about raw food?</h4>
                    <p>Raw foods (particularly meat and eggs) are not recommended. Food poisoning, parasitic infection and
                        nutritional deficiencies are all potential outcomes of feeding raw food. Additionally, many of the
                        microorganisms present in raw meat can be passed on to people. Bones can damage teeth and cause
                        obstruction of the mouth, throat or gastrointestinal tract. In growing puppies raw food can cause
                        nutritional imbalances resulting in improper bone development.
                    </p>
                </div>
                
            </div> 
         )
    };
}

export default FAQ;