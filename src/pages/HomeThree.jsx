import React from 'react';
import dataBanner from '../assets/fake-data/data-banner';
import Banner3 from '../components/banner/banner_v3';
import ProjectV7 from '../components/project/project_v7';
import Project5 from '../components/project/project_v5';
import dataProject from '../assets/fake-data/data-project';
import Faqs from '../components/faqs';
import dataFaq from '../assets/fake-data/data-faqs';

import Partner3 from '../components/partner/Partner3';
import dataPartner from '../assets/fake-data/data-partner';
import Featured2 from '../components/featured/Featured2';
import dataFeatured from '../assets/fake-data/data-feature';
import CTA3 from '../components/cta/CTA3';
import Step from '../components/Step/Step';
import dataStep from '../assets/fake-data/data-step';
import Partner4 from '../components/partner/Partner4';
import CTA from '../components/cta/cta_v2';

import dataTier from '../assets/fake-data/data-tier';
import Tier from '../components/tier';


function HomeThree(props) {
    return (
        <div className='header-fixed main home3 counter-scroll'>
      

           {<Banner3 data={dataBanner} />}

            {<Project5 data={dataProject} />}
           {<CTA3 />}
           {<Featured2 data={dataFeatured} />} 


            {<Step data={dataStep} />}
            {<Partner4 data={dataPartner} />}






           {/* {<Tier data={dataTier} />} */}


           {/* {<ProjectV7 data={dataProject} />} */}


            {<Faqs data={dataFaq} />}  
            
            {<Partner3 data={dataPartner} />}

            <CTA />
 

         
        </div>
    );
}

export default HomeThree;