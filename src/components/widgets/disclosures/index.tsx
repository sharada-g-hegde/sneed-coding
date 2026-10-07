"use client";

import Container from "@/components/elements/container";
import Link from "@/components/elements/link";
import Typography from "@/components/elements/typography";

const linkClass = "text-[#2b6a8a] underline-offset-2 hover:underline";

export default function Disclosures() {
  return (
    <Container className="w-full bg-[#eceff1] text-[#2f3b46]">
      {/* Centered disclosure content */}
      <Container className="mx-auto flex w-full max-w-[1320px] flex-col px-5 py-6 sm:px-8 md:px-10 md:py-8 lg:px-12 xl:px-0 xl:py-10">
        <Container className="flex w-full flex-col gap-4 text-[12px] italic leading-[1.5] sm:text-[13px] md:text-[14px] xl:gap-5 xl:text-[15px] xl:leading-[1.45]">
          <Typography className="m-0 font-albertSans text-[14px] font-bold text-[#2F3B47] lg:text-[14px]">
            For mutual fund fees and standardized quarterly performance, please
            click on the fund name.
          </Typography>
          <Typography className="m-0 mt-2 block font-albertSans text-[14px] leading-[1.6] lg:mt-3 lg:text-[14px]">
            For more information and to obtain a prospectus or summary
            prospectus, please{" "}
            <Link href="#" variant="Link" className={`${linkClass} !inline`}>
              click here
            </Link>
            . Before investing, investors should carefully read and consider
            investment objectives, risks, charges, expenses, and other important
            information about the Fund, which is contained in these documents.
          </Typography>
          <Typography className="m-0 font-albertSans text-[14px] lg:text-[14px]">
            Quoted performance data represent past performance, which does not
            guarantee future results. Investment returns and principal value
            will fluctuate, so investors&apos; shares, when sold, may be worth
            more or less than their original cost. The Payden Funds are
            distributed through Payden &amp; Rygel Distributors, member FINRA.
          </Typography>
          <Typography className="m-0 font-albertSans text-[14px] font-bold text-[#2F3B47] lg:text-[14px]">
            General Risk Disclosures:
          </Typography>
          <Typography className="m-0 font-albertSans text-[14px] lg:text-[14px]">
            Investment in foreign securities entails certain risks from
            investing in domestic securities, including changes in exchange
            rates, political changes, differences in reporting standards, and,
            for emerging-market securities, higher volatility.
          </Typography>
          <Typography className="m-0 font-albertSans text-[14px] lg:text-[14px]">
            Investment in high-yield securities entails certain risks from
            investing in investment-grade securities, including higher
            volatility, greater credit risk, and the issues&apos; more
            speculative nature.
          </Typography>
          <Typography className="m-0 font-albertSans text-[14px] lg:text-[14px]">
            Investment in equity securities poses certain risks, including a
            sudden decline in a holding&apos;s share price or an overall decline
            in the stock market. The value of the Fund&apos;s investment in any
            such securities will fluctuate on a day-to-day basis with movements
            in the stock market, as well as in response to the activities of
            individual companies whose equity securities the Fund owns. Fund
            price may fall when the U.S. stock market declines. Moreover,
            purchasing stocks perceived to be undervalued brings additional
            risks. For example, the issuing company&apos;s condition may worsen
            instead of improve, or the pace and extent of any improvement may be
            less than expected.
          </Typography>
          <Typography className="m-0 font-albertSans text-[14px] lg:text-[14px]">
            Interest Rate Risk: As with most funds that invest in debt
            securities, the income on and value of your shares in the Fund will
            fluctuate along with interest rates. When interest rates rise, the
            market prices of the debt securities the Fund owns usually decline.
            When interest rates fall, the prices of these securities usually
            increase.
          </Typography>
          <Typography className="m-0 font-albertSans text-[14px] lg:text-[14px]">
            Extension Risk: Rising interest rates can cause the average maturity
            of the Fund&apos;s holdings of mortgage-backed securities to
            lengthen unexpectedly due to a drop in prepayments. This would
            increase the sensitivity of the Fund to rising rates and could cause
            certain of the Fund&apos;s investments to decline in value more than
            they would have declined due to the rise in interest rates alone.
          </Typography>
          <Typography className="m-0 font-albertSans text-[14px] lg:text-[14px]">
            Social Impact Investing Risk (applies to the Payden California
            Municipal Social Impact Fund): The Fund&apos;s policy of investing
            in municipal securities for which, in the Adviser&apos;s opinion,
            the proceeds raised are used consistent with positive social and/or
            environmental practices and outcomes could cause the Fund to perform
            differently compared to other mutual funds that do not have such a
            policy. The factors that the Adviser considers in evaluating an
            investment&apos;s positive social and/or environmental benefits are
            part of a proprietary security selection methodology and may change
            over time. There are differences in interpretations of what it means
            to promote positive social and/or environmental benefits. While the
            Adviser believes its definitions are reasonable, the portfolio
            decisions it makes may differ from others&apos; views.
          </Typography>
          <Typography className="m-0 font-albertSans text-[14px] lg:text-[14px]">
            Municipal Securities Tax (applies to the Payden California Municipal
            Social Impact Fund): Income from municipal securities may be subject
            to the Federal alternative minimum tax.
          </Typography>
          <Typography className="m-0 font-albertSans text-[14px] lg:text-[14px]">
            Money Market Risk: An investment in the Payden Cash Balance Money
            Market Fund is not insured or guaranteed by the Federal Deposit
            Insurance Corporation or any other government agency. Although the
            Fund seeks to preserve the value of your investment at $1.00 per
            share, it is possible to lose money by investing in the Fund. The
            Fund&apos;s sponsor has no legal obligation to provide financial
            support to the Fund, and you should not expect that the sponsor will
            provide financial support to the Fund at any time.
          </Typography>
          <Typography className="m-0 font-albertSans text-[14px] font-bold text-black lg:text-[14px]">
            Additional Disclosures:
          </Typography>
          <Typography className="m-0 font-albertSans text-[14px] lg:text-[14px]">
            Please note that by your use of this website and/or sending Payden
            &amp; Rygel any information via this website, you acknowledge that
            any personal information you provide to us will be subject to our{" "}
            <Link
              href="#"
              variant="Link"
              className={`${linkClass} whitespace-nowrap`}
            >
              Privacy Notice
            </Link>
            .
          </Typography>
          <Typography className="m-0 font-albertSans text-[14px] lg:text-[14px]">
            The investment strategy and investment management information
            presented on this website should not be construed to be formal
            financial planning advice or the formation of a financial
            manager/client relationship. Payden.com is an informative website
            designed to provide information to the general public based on our
            recommendations of investment management and investment strategies
            and is not designed to be representative of your own financial
            needs. Nor does the information contained herein constitute
            financial management advice. The firm makes no warranty or
            representation regarding the accuracy or legality of any information
            contained in this website and assumes no liability for the use of
            said information. Be advised that, as Internet communications are
            not always confidential, you provide our website your personal
            information at your own risk. Please do not make any decisions about
            any investment management or investment strategy matter without
            consulting with a qualified professional.
          </Typography>
        </Container>
      </Container>
    </Container>
  );
}
