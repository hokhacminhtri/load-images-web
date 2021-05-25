import React from "react";

function MarketingForm() {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://gmail.us6.list-manage.com/subscribe/post?u=c6d2768bfe8ad387af9c3131c&amp;id=016ebe8151"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
        style={{ padding: "0" }}
      >
        <div id="mc_embed_signup_scroll">
          <h2>Đăng ký để nhận Email thông báo</h2>
          <div class="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default MarketingForm;
