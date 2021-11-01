import React from 'react';

const Frequently = () => {
    return (
        <div>
            <h1 class="text-center pt-5">Frequently Asked  <span class="text-warning">Questions  </span></h1>

<section class="d-flex justify-content-center container pb-5">
    <div class="row d-flex align-items-center mt-4">
        <div class="col-md-4">
            <img src="https://st2.depositphotos.com/46171552/46752/i/600/depositphotos_467525936-stock-photo-cheerful-doctor-standing-crossed-arms.jpg" class="img-fluid" alt=""/>
        </div>
        <div class="col-md-7">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Are you want to know about our history?
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    Medicine is the science[1] and practice[2] of caring for a patient, managing the diagnosis, prognosis, prevention, treatment, palliation of their injury or disease, and promoting their health. Medicine encompasses a variety of health care practices evolved to maintain and restore health by the prevention and treatment of illness. Contemporary medicine applies
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Can you interest to knowing our factory?
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Honda is headquartered in Minato, Tokyo, Japan. Their shares trade on the Tokyo Stock Exchange and the New York Stock Exchange, as well as exchanges in Osaka, Nagoya, Sapporo, Kyoto, Fukuoka, London, Paris, and Switzerland.
                        The company has assembly plants around the globe. These plants are located in China, the United States, Pakistan, Canada, England, Japan, Belgium, Brazil, México, New Zealand, Malaysia, Indonesia, India, Philippines, Thailand
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      About our service
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Honda's automotive manufacturing ambitions can be traced back to 1963, with the Honda T360, a kei car truck built for the Japanese market.[39] This was followed by the two-door roadster, the Honda S500 also introduced in 1963. In 1965, Honda built a two-door commercial delivery van, called the Honda L700. Honda's first four-door sedan was not the Accord, but the air-cooled, four-cylinder, gasoline-powered Honda 1300 in 1969.
                    </div>
                  </div>
                </div>
              </div>
        </div>
        
    </div>
</section>
        </div>
    );
};

export default Frequently;