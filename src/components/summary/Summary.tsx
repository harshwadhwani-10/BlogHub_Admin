import React from "react";

import SummaryBox from "./SummaryBox";
import { useTranslation } from "react-i18next";
import classes from "./Summary.module.scss";
import { IsummData } from "../../interfaces/IsummData";

const summaryData: IsummData[] = [
  {
    icon: "mdi:post",
    text: "thisMonthSales",
    amount: "salesAmount",
    currency: "",
  },
  {
    icon: "mdi:account-group",
    text: "thisMonthOrders",
    amount: "orderAmount",
    currency: "",
  },
  {
    icon: "mdi:folder-multiple",
    text: "thisMonthRevenue",
    amount: "revenueAmount",
    currency: "",
  },
];

function Summary() {
  const { t } = useTranslation();
  return (
    <section className={classes.summary}>
      <p className="subTitle">{t("summary")}</p>
      <div className={classes.summary__box}>
        {summaryData.map((item) => (
          <SummaryBox key={item.text} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Summary;
