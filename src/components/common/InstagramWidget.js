import React from "react";
import { Helmet } from "react-helmet";

export const InstagramWidget = () => {
  return (
    <div>
      <Helmet>
        <style>{`.instawall-root77424{min-height:80px;margin:0 auto}`}</style>
      </Helmet>
      <Helmet>
        <script>
          {`window['instawall77424']={"token":"EQxsASNwjp/ZhM5G3oEYh0IP3UWF8VKQMZiOZrU6hUj9ACXKRCLjG1qu4gGkIoWUwd0i9t8c+T99RG4iiRv2IHmmwidePblsp/VK62uwxGGqTNadI1c=","root_tagid":"instawall-root77424","card_padding":"5","card_border_radius":"5","card_count":"3","layout_max_width":"1128","count_post":"12","header_text_size":"20","header_text_color":"#000000","header_logo_size":"50","header_button_text":"Подписаться","header_button_text_size":"12","header_button_text_color":"#ffffff","header_button_background_color":"#0095f6","hide_groupname":"0","hide_text":"0","hide_shadow":"0","show_header":"0","show_header_logo":"1","show_header_button":"1"};`}
        </script>
      </Helmet>
      <div
        id="instawall-root77424"
        className="instawall instawall-root77424"
      ></div>
      <Helmet>
        <script>
          {`(function(d, s, id){ var js, dfjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.setAttribute("data-scriptid", "77424"); js.src = "https://socactive.com/widgets/instawall/i.js?id=77424&r="+Math.random(); dfjs.parentNode.insertBefore(js, dfjs); }(document, "script", "instawall-export77424"));`}
        </script>
      </Helmet>
      <Helmet>
        <style>{`.tabs-md-bars{display:none}`}</style>
      </Helmet>
      <div className="tabs-md-bars">
        <a href="https://contentuniq.com/">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAH/SURBVDhPbZM9yIFRFMcPsujdJPlIicV3yaQoKbIwKIPVgGRlUxZl8hGLFJMsDBgUg9FiVUomKRtFEjrvvdfV+4rf8Nz/Offec889z7kCJACn3+9Du92G6/UKQqEQLpcL6PV6aDabfMUXaIDJZIIKhQLr9To138hkMjidTrn1CQyHQ/R4PNz8ZLvdYjQa5dYnYDabufzjfr/j4XDgFqLD4eDqE6FUKuWXeTIej0EkEoFGowGj0ch8YrGYjd8QxuNxaDQazBAIBLBYLJg+Ho/Q6/XAarXCfr8Hl8sFpVKJzb1B01AqlSwdsomNL2QyGVdPOp0OqlQq7Ha73ENqQD+DwQATiQRzUGhd1Go1lstl7nknmUxiJBJhmgWghEIh9rtSqRTebjcMBALMn8/nkdSJ6f8UCgWsVqt/ASherxcrlQrTTqeTjZTlcombzQZ3ux2eTifuRbTb7SjkpWCQDODn5wfkcjmEw2FIp9Pg8/nAYDCAVquF1WrF5h+PB1tPi/6WwYv5fI6tVotdazQaoU6nw9lsxmef0NNpRm8ZvCA1AJIqkI1gs9lgvV4DCfA8kZDNZoEUEUj7f8+A3tPv9zNNf1swGES3242kHzCXy2EsFmNzlK8BKKSBuHpyPp9ZSxeLRe558vac/0OfssViAZPJBORdsOvUajWQSCR8BQXgFzO9aolFQOSUAAAAAElFTkSuQmCC"
            alt="Instagram Logo"
          />
        </a>
      </div>
    </div>
  );
};
