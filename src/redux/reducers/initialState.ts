const getBrandTags = async (): Promise<object> => {
  const response = await fetch("https://api.extrazone.com/tags/list",{
    headers:{
        "X-Country-Id":"TR",
        "X-Language-Id":"TR"
    }

  })
  const data = await response.json();
  return data;
};

const getPromotionList = async (): Promise<object> => {
  const response = await fetch("https://api.extrazone.com/promotions/list?Channel=PWA",{
    headers:{
        "X-Country-Id":"TR",
        "X-Language-Id":"TR"
    }

  })
  const data = await response.json();
  return data;
};

const initialState = {
  brandTags: getBrandTags(),
  promotionList:getPromotionList(),
};

export {initialState};
