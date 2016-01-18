
var Footer = React.createClass({
  render: function() {
    var self = this;
    return (
      <div>
        <div className="well">
          <div className="row">
            <div className="col-md-2 col-lg-2"></div>
            <div className="col-md-8 col-lg-8">
              <div id="about">
                <h4>
                  关于
                </h4>
                <li>
                <ul>
                  <b>中国在肯尼亚减贫及负责任投资倡导平台搭建(第一期)</b><br/>项目主要通过文献综述辅以访谈,就
                  已有的国内外学术研究、媒体报道和其他相关资源,梳理和分析中国在非洲(主要在肯尼亚)在减贫和可持续发
                  展领域的挑战与机遇。项目希望从不同维度,例如资本来源、技术转移、劳工情况和环境保护等进行论述,辅以
                  梳理中国和肯尼亚建交以来双边关系的发展历程,来发现挑战和机遇。以研究为基础,项目搭建此网上平台,以
                  求实时更新中肯关系发展的最新发展。以这一期项目为契机,中南屋希望搭建关注和研究中肯关系的平台,提升
                  中国企业在肯尼亚负责任投资意识,促进中国和肯尼亚建立和巩固双方互利共赢的关系。
                </ul>
                </li>
              </div>
              <br/>
              <div id="contact">
                <h4>联系方式</h4>
                <ul>电话: +254 737513643</ul>
                <ul>电子邮箱: <a href="mailto:nairobichinahouse@gmail.com?subject=Greeting">nairobichinahouse@gmail.com</a></ul>
                <ul>地址: B8, Nyangumi Coral Apartment, Nyangumi Road, Kilimani, Nairobi</ul>
              </div>
              <br/>

            </div>
          </div>
        </div>
        <div>
          <div className="col-md-2 col-lg-2"></div>
          <div className="col-md-8 col-lg-8">
            <footer>
              <p>版权 &copy; 中南屋</p>
              <p>Design and development by <a href="mailto:wanhao.maple@gmail.com?subject=Hey Maple">Hao Wan</a> </p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
});
                /*<ul>
                  This project will present and assess the opportunity and challenge of Chinese poverty alleviation and sustainable development in Kenya by literature
                  review (including researching academic paper, media report and other resources) and interview. We seek and discern the challenge and opportunity 
                  from various perspectives, such as capital resource, technology transfer, labor issues and environment protection. The final report will also include a 
                  summary of bilateral relation between China and Kenya, for helping a better understanding of China­Kenya cooperation in economics and politics. 
                  We see the project as an opportunity for developing a China­Kenya bilateral relation stakeholder platform so as to increase the awareness of 
                  responsible investment of Chinese enterprises. Ultimately, we would like to assist the formation and consolidation of a win­win bilateral relations 
                  between China and Kenya.
                </ul> */

React.render(
   <Footer></Footer>,
  document.getElementById('footer')
);

