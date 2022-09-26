import ES1 from "../files/TSP/ES/ES1.pdf"
import ES2 from "../files/TSP/ES/ES2.pdf"
import ES3 from "../files/TSP/ES/ES3.pdf"
import ES4 from "../files/TSP/ES/ES4.pdf"
import SOL1 from "../files/TSP/SOL/SOL1.pdf"

import SOL2010 from "../files/TSP/PPSOL/SOL2010.pdf"
import SOL2011 from "../files/TSP/PPSOL/SOL2011.pdf"
import SOL2012 from "../files/TSP/PPSOL/SOL2012.pdf"
import SOL2014 from "../files/TSP/PPSOL/SOL2014.pdf"
import SOL2015 from "../files/TSP/PPSOL/SOL2015.pdf"
import SOL2016 from "../files/TSP/PPSOL/SOL2016.pdf"
import SOL2017 from "../files/TSP/PPSOL/SOL2017.pdf"

import PP2008 from "../files/TSP/PP/2008.pdf"
import PP2009 from "../files/TSP/PP/2009.pdf"
import PP2010 from "../files/TSP/PP/2010.pdf"
import PP2011 from "../files/TSP/PP/2011.pdf"
import PP2012 from "../files/TSP/PP/2012.pdf"
import PP2013 from "../files/TSP/PP/2013.pdf"
import PP2014 from "../files/TSP/PP/2014.pdf"
import PP2015 from "../files/TSP/PP/2015.pdf"
import PP2016 from "../files/TSP/PP/2016.pdf"
import PP2017 from "../files/TSP/PP/2017.pdf"
import PP2018 from "../files/TSP/PP/2018.pdf"
import PP2019 from "../files/TSP/PP/2019.pdf"
import PP2020 from "../files/TSP/PP/2020.pdf"
import PP2021 from "../files/TSP/PP/2021.pdf"
import PP2022 from "../files/TSP/PP/2022.pdf"

export default function TSP() {
  return (
    <div>
      <h1>Thermal and Statistical Physics</h1>

      <esBlock className="esBlock">
        <div className="examples">
          <a href={ES1} target = "blank">
            Example Sheet 1
          </a>
          <a href={ES2} target = "blank">
            Example Sheet 2
          </a>
          <a href={ES3} target = "blank">
            Example Sheet 3
          </a>
          <a href={ES4} target = "blank">
            Example Sheet 4
          </a>
        </div>

        <div className="esOneAnswer">
              <a href={SOL1} target = "blank">
                Solutions
              </a>
        </div>
      </esBlock>

      <h2>Past Papers/Solutions</h2>
      
      <ppBlock className="ppBlock">
        <div className="ppArea">
        <a href={PP2022} target = "blank">2022</a>
        <a href={PP2021} target = "blank">2021</a>
        <a href={PP2020} target = "blank">2020</a>
        <a href={PP2019} target = "blank">2019</a>
        <a href={PP2018} target = "blank">2018</a>
        <a href={PP2017} target = "blank">2017</a>
        <a href={PP2016} target = "blank">2016</a>
        <a href={PP2015} target = "blank">2015</a>
        <a href={PP2014} target = "blank">2014</a>
        <a href={PP2013} target = "blank">2013</a>
        <a href={PP2012} target = "blank">2012</a>
        <a href={PP2011} target = "blank">2011</a>
        <a href={PP2010} target = "blank">2010</a>
        <a href={PP2009} target = "blank">2009</a>
        <a href={PP2008} target = "blank">2008</a>

        </div>

        <div className="solArea">
          <a className="invalid">2022</a>
          <a className="invalid">2021</a>
          <a className="invalid">2020</a>
          <a className="invalid">2019</a>
          <a className="invalid">2018</a>
          <a href={SOL2017} target = "blank">2017</a>
          <a href={SOL2016} target = "blank">2016</a>
          <a href={SOL2015} target = "blank">2015</a>
          <a href={SOL2014} target = "blank">2014</a>
          <a className="invalid">2013</a>
          <a href={SOL2012} target = "blank">2012</a>
          <a href={SOL2011} target = "blank">2011</a>
          <a href={SOL2010} target = "blank">2010</a>
          <a className="invalid">2009</a>
          <a className="invalid">2008</a>

        </div>

      </ppBlock>
    </div>
    )
}