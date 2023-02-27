import React, { useEffect } from 'react';
import {Header} from './Header';
import Footer from '../components/Footer'
import '../styles/Publications.css';
import ArticleIcon from '@mui/icons-material/Article';

const Publications = () => {
  useEffect(() => {
    document.title = "Publications"
  }, []);
  return (
    <>
      <div className="publications" style={{ backgroundColor: '#817d7d27' }}>
        <Header/>
        <div className="all_links">
        <h1 style={{ color: '#494b4d', textAlign: 'center', width: '100%' }}>Publications</h1>
          <div className='pub_item'>
            <h2><ArticleIcon/><a style={{ textDecoration: 'none' }} href='https://bmjopen.bmj.com/content/11/10/e049267' target='_blank' rel="noopener noreferrer"> Cross-sectional examination of 24-hour movement behaviours among 3- and 4-year-old children in urban and
              rural settings in low-income, middle-income and high-income countries: the SUNRISE study protocol. </a></h2>
            <p>Okely, T., Reilly, J. J., Tremblay, M. S., Kariippanon, K. E., Draper, C. E., el Hamdouchi, A., Florindo, A. A., Green, J. P., Guan, H., Katzmarzyk, P. T., Lubree, H., Pham, B. N., Suesse, T., Willumsen, J., Basheer, M., Calleia, R., Chong, K. H., Cross, P. L., Nacher, M., … Widyastari, D. A. (2021). Cross-sectional examination of 24-hour movement behaviours among 3- And 4-year-old children in urban and rural settings in low-income, middle-income and high-income countries- And SUNRISE study protocol. BMJ Open, 11(10). https://doi.org/10.1136/bmjopen-2021-049267</p>
          </div>
          <div className='pub_item'>
            <h2><ArticleIcon/><a style={{ textDecoration: 'none' }} href='https://bmcpediatr.biomedcentral.com/articles/10.1186/s12887-020-1969-6' target='_blank' rel="noopener noreferrer"> Validity of low-cost measures for global surveillance of physical activity in pre-school children: The SUNRISE validation study.</a></h2>
            <p>Mwase-Vuma, T. W., Janssen, X., Okely, A. D., Tremblay, M. S., Draper, C. E., Florindo, A. A., Tanaka, C., Koh, D., Hongyan, G., Tang, H. K., Chong, K. H., Löf, M., Hossain, M. S., Cross, P., Chathurangana, P. W. P., & Reilly, J. J. (2022). Validity of low-cost measures for global surveillance of physical activity in pre-school children: The SUNRISE validation study. Journal of Science and Medicine in Sport, 25(12), 1002–1007. https://doi.org/10.1016/j.jsams.2022.10.003</p>
          </div>
          <div className='pub_item'>
            <h2><ArticleIcon/><a style={{ textDecoration: 'none' }} href='https://link.springer.com/article/10.1007/s12098-021-03895-2' target='_blank' rel="noopener noreferrer"> Prevalence of Physical Activity, Screen Time, and Sleep, and Associations with Adiposity and Motor
              Development among Preschool-Age Children in Vietnam: The SUNRISE Vietnam Pilot Study. </a></h2>
            <p>Kim, T. v., Pham, T. N. D., Nguyen, C. L. D., Nguyen, T. T. D., Okely, A. D., & Tang, H. K. (2022). Prevalence of Physical Activity, Screen Time, and Sleep, and Associations with Adiposity and Motor Development among Preschool-Age Children in Vietnam: The SUNRISE Vietnam Pilot Study. Indian Journal of Pediatrics, 89(2), 148–153. https://doi.org/10.1007/s12098-021-03895-2g</p>
          </div>
          <div className='pub_item'>
            <h2><ArticleIcon/><a style={{ textDecoration: 'none' }} href='https://journals.lww.com/acsm-msse/Abstract/9000/Levels_and_Correlates_of_Objectively_Measured.95866.aspx' target='_blank' rel="noopener noreferrer"> Levels and Correlates of Objectively Measured Sedentary Behaviour in Young Children: SUNRISE Study
              Results from 19 Countries. </a></h2>
            <p>Kariippanon, K. E., Chong, K. A. R. H. A. U., Janssen, X., Tomaz, S. A., Ribeiro, E. H. C., Munambah, N., Chan, C. H. S., Chathurangana, P. P., Draper, C. E., el Hamdouchi, A., Florindo, A. A., Guan, H., Ha, A. M. Y. S., Hossain, M. S., Kim, D. H., van Kim, T., Koh, D. C. L., Löf, M., Pham, B. N., … Okely, A. D. (2022). Levels and Correlates of Objectively Measured Sedentary Behavior in Young Children: SUNRISE Study Results from 19 Countries. Medicine and Science in Sports and Exercise, 54(7), 1123–1130. https://doi.org/10.1249/MSS.0000000000002886</p>
          </div>
          <div className='pub_item'>
            <h2><ArticleIcon/><a style={{ textDecoration: 'none' }} href='https://bmcpediatr.biomedcentral.com/articles/10.1186/s12887-020-1969-6' target='_blank' rel="noopener noreferrer"> The impact of covid‐19 on preschool‐aged children’s movement behaviors in Hong Kong: A longitudinal analysis of accelerometer‐measured data.</a></h2>
            <p>Ng, J. Y. Y., He, Q., Chong, K. H., Okely, A. D., Chan, C. H. S., & Ha, A. S. (2021). The impact of covid‐19 on preschool‐aged children’s movement behaviors in Hong Kong: A longitudinal analysis of accelerometer‐measured data. International Journal of Environmental Research and Public Health, 18(22). https://doi.org/10.3390/ijerph182211907</p>
          </div>
          <div className='pub_item'>
            <h2><ArticleIcon/><a style={{ textDecoration: 'none' }} href='https://pilotfeasibilitystudies.biomedcentral.com/articles/10.1186/s40814-021-00912-1' target='_blank' rel="noopener noreferrer"> International study of 24-h movement behaviors of early years (SUNRISE): a pilot study from Bangladesh.
            </a></h2>
            <p>Hossain, M. S., Deeba, I. M., Hasan, M., Kariippanon, K. E., Chong, K. H., Cross, P. L., Ferdous, S., & Okely, A. D. (2021). International study of 24-h movement behaviors of early years (SUNRISE): a pilot study from Bangladesh. Pilot and Feasibility Studies, 7(1). https://doi.org/10.1186/s40814-021-00912-1</p>
          </div>
          <div className='pub_item'>
            <h2><ArticleIcon/><a style={{ textDecoration: 'none' }} href='https://journals.assaf.org.za/index.php/sajsm/article/view/10864' target='_blank' rel="noopener noreferrer"> 24 hour movement behaviours and the health and development of pre-school children from Zimbabwean
              settings : the SUNRISE pilot study. </a></h2>
            <p>Munambah, N., Gretschel, P., Muchirahondo, F. C., Chiwaridzo, M., Chikwanha, T. M., Kariippanon, K. E., Chong, K. H., Cross, P. L., Draper, C. E., & Okely, A. D. (2021). 24 hour movement behaviours and the health and development of pre-school children from Zimbabwean settings: the SUNRISE pilot study. South African Journal of Sports Medicine, 33(1). https://doi.org/10.17159/2078-516x/2021/v33i1a10864</p>
          </div>
          <div className='pub_item'>
            <h2><ArticleIcon/><a style={{ textDecoration: 'none' }} href='https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10852-3' target='_blank' rel="noopener noreferrer"> Global effect of COVID-19 pandemic on physical activity, sedentary behaviour and sleep among 3- to
              5-year-old children: a longitudinal study of 14 countries. </a></h2>
            <p>Okely, A. D., Kariippanon, K. E., Guan, H., Taylor, E. K., Suesse, T., Cross, P. L., Chong, K. H., Suherman, A., Turab, A., Staiano, A. E., Ha, A. S., el Hamdouchi, A., Baig, A., Poh, B. K., del Pozo-Cruz, B., Chan, C. H. S., Nyström, C. D., Koh, D., Webster, E. K., … Draper, C. E. (2021). Global effect of COVID-19 pandemic on physical activity, sedentary behaviour and sleep among 3- to 5-year-old children: a longitudinal study of 14 countries. BMC Public Health, 21(1). https://doi.org/10.1186/s12889-021-10852-3</p>
          </div>
          <div className='pub_item'>
            <h2><ArticleIcon/> Relationship between adherence to WHO “24-Hour Movement Guidelines for the Early Years” and motor skills or cognitive function in preschool children: SUNRISE pilot study.</h2>
            <p>Tanaka, C., Okada, S., Takakura, M., Hasimoto, K., Mezawa, H., Ando, D., Tanaka, S., & Okely, A. D. (2020). Relationship between adherence to WHO “24-Hour Movement Guidelines for the Early Years” and motor skills or cognitive function in preschool children: SUNRISE pilot study. Japanese Journal of Physical Fitness and Sports Medicine, 69(4), 327–333. https://doi.org/10.7600/JSPFSM.69.327</p>
          </div>
          <div className='pub_item'>
            <h2><ArticleIcon/><a style={{ textDecoration: 'none' }} href='https://bmcpediatr.biomedcentral.com/articles/10.1186/s12887-020-1969-6' target='_blank' rel="noopener noreferrer"> Proportion of kindergarten
              children meeting the WHO guidelines on physical activity, sedentary behaviour and sleep and
              associations with adiposity in urban Beijing.</a></h2>
            <p>Guan, H., Zhang, Z., Wang, B., Okely, A. D., Tong, M., Wu, J., & Zhang, T. (2020). Proportion of kindergarten children meeting the WHO guidelines on physical activity, sedentary behaviour and sleep and associations with adiposity in urban Beijing. BMC Pediatrics, 20(1). https://doi.org/10.1186/s12887-020-1969-6</p>
          </div>
          <div className='pub_item'>
            <h2><ArticleIcon/><a style={{ textDecoration: 'none' }} href='https://journals.assaf.org.za/index.php/sajsm/article/view/8415' target='_blank' rel="noopener noreferrer"> Understanding
              the influence of 24-hour movement behaviours on the health and development of preschool children from
              low-income South African settings: the SUNRISE pilot study</a></h2>
            <p>Draper, C., Tomaz, S. A., Cook, C. J., Jugdav, S. S., Ramsammy, C., Besharati, S., van Heerden, A., Vilakazi, K., Cockcroft, K., Howard, S. J., & Okely, A. D. (2020). Understanding the influence of 24-hour movement behaviours on the health and development of preschool children from low-income South African settings: the SUNRISE pilot study. South African Journal of Sports Medicine, 32(1), 1–7. https://doi.org/10.17159/2078-516x/2020/v32i1a8415</p>
          </div>
          <div className='pub_item'>
            <h2><ArticleIcon/><a style={{ textDecoration: 'none' }} href='https://www.mdpi.com/1660-4601/17/22/8491' target='_blank' rel="noopener noreferrer"> International Study of Movement Behaviors in the Early Years (SUNRISE): Results from SUNRISE
              Sweden’s Pilot and COVID-19 Study.</a></h2>
            <p>Nyström, C. D., Alexandrou, C., Henström, M., Nilsson, E., Okely, A. D., el Masri, S. W., & Löf, M. (2020). International study of movement behaviors in the early years (Sunrise): Results from sunrise sweden’s pilot and covid-19 study. International Journal of Environmental Research and Public Health, 17(22), 1–12. https://doi.org/10.3390/ijerph17228491</p>
          </div>
          <div className='pub_item'>
            <h2><ArticleIcon/> SUNRISE International Surveillance Study of Movement Behaviours in the Early Years: Preliminary
              24-Hour Movement Behaviour Results from the Canadian Pilot. International Society for Behavioral
              Nutrition and Physical Activity Congress 2019 (Prague, Czech Republic), June, 2019.</h2>
            <p>Poster presentation: E Turner; SJ Carson; MD Guerrero; ML Forse; MS Tremblay</p>
          </div>
          <div className='pub_item'>
            <h2><ArticleIcon/> SUNRISE International Surveillance Study of Movement Behaviours in the Early Years: 24-hour movement behaviour
              results from the Canadian pilot. Canadian Society for Exercise Physiology Scientific Conference (Kelowna),
              November, 2019.</h2>
            <p>E Turner; SJ Carson; MD Guerrero; ML Forse; MS Tremblay</p>
          </div>
          {/* <div className='pub_item'>
            <h2><ArticleIcon/><a style={{ textDecoration: 'none' }} href='https://www.mdpi.com/1660-4601/18/22/11907' target='_blank' rel="noopener noreferrer"> The Impact of COVID-19 on Preschool-Aged Children's Movement Behaviors in Hong Kong: A Longitudinal
              Analysis of Accelerometer-Measured Data. </a></h2>
            <p>Johan YY Ng; Q He; KH Chong; AD Okely; CH S Chan; AS Ha</p>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Publications;
