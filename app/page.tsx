"use client"

import {
	ArrowUpRight,
	BarChart3,
	Bell,
	CalendarDays,
	Check,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	CloudDownload,
	Home,
	LogOut,
	Megaphone,
	MessageCircle,
	Package,
	Search,
	ShoppingCart,
	ShoppingBag,
	Slack,
	SquareDashedMousePointer,
	UsersRound,
	UserRound,
} from "lucide-react"
import {
	CartesianGrid,
	Line,
	LineChart,
	PolarAngleAxis,
	RadialBar,
	RadialBarChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts"

const sessionsData = [
	{ day: "21", value: 2 },
	{ day: "22", value: 6 },
	{ day: "23", value: 3 },
	{ day: "24", value: 7 },
	{ day: "25", value: 4 },
	{ day: "26", value: 15 },
]

const conversionData = [{ name: "conversion", value: 58.19, fill: "#4f46e5" }]

export default function Page() {
	return (
		<div className="dashboardWrap">
			<div className="dashboardCard">
				<aside className="sidebar">
					<div>
						<div className="brandRow">
							<div className="brandIdentity">
								<div className="brandIcon">R</div>
								<span className="brandText">flex</span>
							</div>
							<button className="brandBack" type="button" aria-label="Collapse menu">
								<ChevronLeft size={14} />
							</button>
						</div>

						<p className="sectionLabel">Menu</p>
						<nav className="menuList">
							<a className="menuItem active" href="#">
								<span className="menuLead">
									<span className="menuIconWrap">
										<Home size={15} />
									</span>
									Dashboard
								</span>
							</a>
							<a className="menuItem" href="#">
								<span className="menuLead">
									<ShoppingBag size={16} />
									Orders
								</span>
								<ChevronDown size={14} className="menuChevron" />
							</a>
							<a className="menuItem" href="#">
								<span className="menuLead">
									<Package size={16} />
									Products
								</span>
								<ChevronDown size={14} className="menuChevron" />
							</a>
							<a className="menuItem" href="#">
								<span className="menuLead">
									<BarChart3 size={16} />
									Analytics
								</span>
							</a>
							<a className="menuItem" href="#">
								<span className="menuLead">
									<Megaphone size={16} />
									Marketing
								</span>
								<ChevronDown size={14} className="menuChevron" />
							</a>
							<a className="menuItem messageItem" href="#">
								<span className="menuLead">
									<MessageCircle size={16} />
									Messages
								</span>
								<span className="pill">25</span>
							</a>
						</nav>

						<p className="sectionLabel integrations">Integrations</p>
						<nav className="menuList integrationsList">
							<a className="menuItem" href="#">
								<span className="menuLead">
									<SquareDashedMousePointer size={16} />
									Jira
								</span>
							</a>
							<a className="menuItem" href="#">
								<span className="menuLead">
									<Slack size={16} />
									Slack
								</span>
							</a>
							<a className="menuItem" href="#">
								<span className="menuLead">
									<MessageCircle size={16} />
									Intercom
								</span>
							</a>
						</nav>
					</div>

					<a className="logoutBtn" href="#">
						<span className="menuLead">
							<LogOut size={16} />
							Logout
						</span>
					</a>
				</aside>

				<main className="mainPanel">
					<header className="topBar">
						<div className="searchRow">
							<button className="iconBtn" type="button" aria-label="Back">
								<ChevronLeft size={16} />
							</button>
							<label className="searchBox">
								<Search size={16} />
								<input type="text" placeholder="Search" />
							</label>
						</div>

						<div className="topActions">
							<button className="iconBtn notificationBtn" type="button" aria-label="Notifications">
								<Bell size={16} />
								<span className="notificationDot" />
							</button>
							<div className="balanceInfo">
								<span>Your Balance</span>
								<strong>$5.456</strong>
							</div>
							<span className="topDivider" />
							<button className="profileBtn" type="button">
								<div className="avatar">
									<UserRound size={15} />
								</div>
								<span>Hi, Lay</span>
							</button>
						</div>
					</header>

					<section className="dashboardTitleRow">
						<h1>
							<span className="dashboardIcon">
								<Home size={16} />
							</span>
							Dashboard
						</h1>
						<div className="titleActions">
							<button className="monthBtn" type="button">
								<CalendarDays size={15} />
								This Month
								<ChevronDown size={15} />
							</button>
							<button className="downloadBtn" type="button">
								<CloudDownload size={15} />
								Download Report
							</button>
						</div>
					</section>

					<section className="statsGrid">
						<article className="metricCard">
							<div className="metricIcon">
								<ShoppingCart size={14} />
							</div>
							<div>
								<p>Total Sales</p>
								<h2>263k</h2>
							</div>
							<span className="trend up">↑ 15.6%</span>
						</article>

						<article className="metricCard">
							<div className="metricIcon">
								<UserRound size={14} />
							</div>
							<div>
								<p>Total Visitors</p>
								<h2>35k</h2>
							</div>
							<span className="trend down">↓ 6.2%</span>
						</article>

						<article className="metricCard">
							<div className="metricIcon">
								<Package size={14} />
							</div>
							<div>
								<p>Total Orders</p>
								<h2>165k</h2>
							</div>
							<span className="trend up">↑ 3.5%</span>
						</article>
					</section>

					<section className="contentGrid">
						<article className="blockCard sessionsCard">
							<div className="cardHeader">
								<h3>Online Store Sessions</h3>
								<button type="button">View Report</button>
							</div>

							<div className="sessionsNumbers">
								<div className="sessionsPrimary">
									<div className="sessionsIcon">
										<UsersRound size={14} />
									</div>
									<div>
										<p>Visitors</p>
										<h4>68</h4>
									</div>
								</div>
								<div className="sessionsMeta">
									<strong className="up">↑ 15.6%</strong>
									<div className="sessionsMetaRow">
										<span className="sessionsCount">26</span>
										<span className="down">↓ 1.6%</span>
									</div>
								</div>
							</div>

							<div className="sessionsSubHeader">
								<h5>Sessions Over Time</h5>
								<button type="button" className="monthFilterBtn">
									<CalendarDays size={14} />
									February
									<ChevronDown size={14} />
								</button>
							</div>

							<div className="lineChartWrap">
								<ResponsiveContainer width="100%" height={180}>
									<LineChart data={sessionsData}>
										<CartesianGrid stroke="#eef0f8" vertical={false} />
										<YAxis
											tickLine={false}
											axisLine={false}
											ticks={[0, 5, 10, 15]}
											tick={{ fill: "#8f98b2", fontSize: 12, fontWeight: 600 }}
											width={28}
										/>
										<XAxis dataKey="day" hide />
										<Tooltip cursor={false} />
										<Line
											type="monotone"
											dataKey="value"
											stroke="#4f46e5"
											strokeWidth={3}
											dot={false}
										/>
									</LineChart>
								</ResponsiveContainer>
							</div>

							<div className="dayPagination">
								<button type="button" aria-label="Previous day">
									<ChevronLeft size={14} />
								</button>
								<span className="activeDay">21</span>
								<span>22</span>
								<span>23</span>
								<span>24</span>
								<span>25</span>
								<button type="button" aria-label="Next day">
									<ChevronRight size={14} />
								</button>
							</div>
						</article>

						<article className="blockCard promoCard">
							<h3>Need More Stats?</h3>
							<p>Upgrade to pro for added benefits.</p>
							<button type="button">Go Pro Now</button>
						</article>

						<article className="blockCard conversionCard">
							<h3>Conversion</h3>
							<div className="gaugeWrap">
								<ResponsiveContainer width="100%" height={248}>
									<RadialBarChart
										data={conversionData}
										cx="50%"
										cy="98%"
										startAngle={180}
										endAngle={0}
										innerRadius="59%"
										outerRadius="108%"
										barSize={30}
									>
										<defs>
											<linearGradient id="conversionGradient" x1="0%" y1="100%" x2="100%" y2="0%">
												<stop offset="0%" stopColor="#8d8cff" />
												<stop offset="100%" stopColor="#4c46f3" />
											</linearGradient>
										</defs>
										<PolarAngleAxis
											type="number"
											domain={[0, 100]}
											tick={false}
											axisLine={false}
										/>
										<RadialBar
											dataKey="value"
											fill="url(#conversionGradient)"
											background={{ fill: "#e8e8fa" }}
											cornerRadius={22}
										/>
									</RadialBarChart>
								</ResponsiveContainer>
								<span className="gaugeNeedle" />
								<div className="conversionValue">
									<strong>58,19%</strong>
									<span>↑ 3.5%</span>
								</div>
							</div>
							<div className="conversionStats">
								<p>
									<Check size={12} />
									<span>Income</span>
									<strong>$542,317</strong>
								</p>
								<p>
									<ArrowUpRight size={12} />
									<span>Expences</span>
									<strong>$497,456</strong>
								</p>
							</div>
						</article>
					</section>
				</main>
			</div>

			<style jsx>{`
				.dashboardWrap {
					min-height: 100vh;
					background: #f3f4f8;
					padding: 22px;
				}

				.dashboardCard {
					display: grid;
					grid-template-columns: 260px 1fr;
					background: #f9fafc;
					border-radius: 28px;
					min-height: calc(100vh - 44px);
					overflow: hidden;
					box-shadow: 0 18px 45px rgba(26, 41, 70, 0.08);
				}

				.sidebar {
					background: #ffffff;
					border-right: 1px solid #eceef5;
					padding: 22px 20px 18px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
				}

				.brandRow {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 22px;
				}

				.brandIdentity {
					display: flex;
					align-items: center;
					gap: 10px;
				}

				.brandBack {
					width: 34px;
					height: 34px;
					border-radius: 50%;
					border: 1px solid #e7eaf4;
					background: #fff;
					color: #b3b9ca;
					display: grid;
					place-items: center;
				}

				.brandIcon {
					width: 32px;
					height: 32px;
					background: #f2cc56;
					color: #21263d;
					font-size: 14px;
					font-weight: 800;
					display: grid;
					place-items: center;
					clip-path: polygon(25% 6%, 75% 6%, 94% 50%, 75% 94%, 25% 94%, 6% 50%);
				}

				.brandText {
					font-size: 30px;
					font-weight: 800;
					line-height: 1;
					letter-spacing: -0.035em;
					color: #1a2138;
				}

				.sectionLabel {
					color: #a1a8bc;
					font-size: 13px;
					font-weight: 600;
					letter-spacing: -0.02em;
					margin: 0 0 14px;
				}

				.integrations {
					margin-top: 24px;
				}

				.menuList {
					display: flex;
					flex-direction: column;
					gap: 7px;
				}

				.menuItem {
					display: flex;
					align-items: center;
					justify-content: space-between;
					color: #2b3150;
					text-decoration: none;
					padding: 13px 14px;
					border-radius: 999px;
					font-weight: 700;
					font-size: 14px;
					line-height: 1;
					letter-spacing: -0.03em;
					transition: background 0.2s ease;
				}

				.menuLead {
					display: inline-flex;
					align-items: center;
					gap: 11px;
				}

				.menuChevron {
					color: #b4bbcc;
				}

				.menuIconWrap {
					width: 22px;
					height: 22px;
					border-radius: 999px;
					background: rgba(255, 255, 255, 0.22);
					display: grid;
					place-items: center;
				}

				.menuItem.active {
					background: linear-gradient(92deg, #4b44ec 0%, #5149ff 100%);
					color: #ffffff;
					box-shadow: 0 18px 28px rgba(79, 70, 229, 0.33);
				}

				.messageItem {
					margin-top: 2px;
				}

				.pill {
					margin-left: auto;
					background: #50c589;
					color: #fff;
					border-radius: 999px;
					padding: 2px 7px;
					font-size: 10px;
					font-weight: 700;
					line-height: 1.4;
				}

				.integrationsList .menuItem {
					color: #39405f;
				}

				.logoutBtn {
					display: flex;
					align-items: center;
					justify-content: space-between;
					color: #2f3650;
					text-decoration: none;
					font-weight: 700;
					font-size: 14px;
					padding: 13px 14px;
					border-radius: 999px;
					letter-spacing: -0.03em;
				}

				.mainPanel {
					padding: 18px 24px 24px;
				}

				.topBar {
					display: flex;
					justify-content: space-between;
					align-items: center;
					gap: 12px;
					margin-bottom: 22px;
				}

				.searchRow {
					display: flex;
					align-items: center;
					gap: 10px;
					flex: 1;
				}

				.iconBtn {
					width: 40px;
					height: 40px;
					border: 1px solid #e5e8f2;
					border-radius: 50%;
					background: #fff;
					color: #6f7892;
					display: grid;
					place-items: center;
					position: relative;
					box-shadow: 0 4px 10px rgba(31, 45, 78, 0.04);
				}

				.notificationBtn {
					color: #7f88a3;
				}

				.notificationDot {
					position: absolute;
					right: 10px;
					top: 10px;
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background: #4f46e5;
					border: 2px solid #ffffff;
				}

				.searchBox {
					height: 44px;
					flex: 1;
					max-width: 500px;
					display: flex;
					align-items: center;
					gap: 8px;
					background: #fff;
					border: 1px solid #e4e8f2;
					border-radius: 999px;
					padding: 0 16px;
					color: #a3aac0;
					box-shadow: inset 0 1px 0 rgba(16, 24, 40, 0.01);
				}

				.searchBox input {
					flex: 1;
					border: none;
					outline: none;
					font-size: 14px;
					background: transparent;
					color: #556081;
				}

				.topActions {
					display: flex;
					align-items: center;
					gap: 12px;
				}

				.balanceInfo {
					padding: 0;
					display: flex;
					flex-direction: column;
					line-height: 1.2;
				}

				.balanceInfo span {
					color: #9ea6bb;
					font-size: 12px;
					font-weight: 600;
				}

				.balanceInfo strong {
					color: #4f46e5;
					font-size: 18px;
					font-weight: 800;
					line-height: 1;
					letter-spacing: -0.03em;
				}

				.topDivider {
					width: 1px;
					height: 34px;
					background: #e7eaf4;
				}

				.profileBtn {
					height: 42px;
					border-radius: 999px;
					border: none;
					background: transparent;
					padding: 0;
					display: flex;
					align-items: center;
					gap: 8px;
					color: #3a4260;
					font-weight: 700;
					font-size: 14px;
				}

				.avatar {
					width: 34px;
					height: 34px;
					border-radius: 50%;
					background: #ff955a;
					color: #fff;
					display: grid;
					place-items: center;
					box-shadow: 0 5px 10px rgba(255, 149, 90, 0.35);
				}

				.dashboardTitleRow {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 16px;
				}

				.dashboardTitleRow h1 {
					margin: 0;
					display: inline-flex;
					align-items: center;
					gap: 12px;
					font-size: 35px;
					color: #1e2540;
					font-weight: 800;
					letter-spacing: -0.03em;
				}

				.dashboardIcon {
					width: 34px;
					height: 34px;
					border-radius: 11px;
					background: #4f46e5;
					color: #ffffff;
					display: grid;
					place-items: center;
					box-shadow: 0 10px 20px rgba(79, 70, 229, 0.28);
				}

				.titleActions {
					display: flex;
					align-items: center;
					gap: 10px;
				}

				.monthBtn,
				.downloadBtn {
					height: 42px;
					border-radius: 999px;
					border: 1px solid #e6e9f3;
					background: #fff;
					color: #596281;
					font-weight: 700;
					font-size: 14px;
					display: inline-flex;
					align-items: center;
					gap: 8px;
					padding: 0 16px;
				}

				.downloadBtn {
					background: linear-gradient(96deg, #43c77a 0%, #58c982 100%);
					border: none;
					color: #fff;
					box-shadow: 0 10px 18px rgba(73, 201, 128, 0.33);
				}

				.statsGrid {
					display: grid;
					grid-template-columns: repeat(3, minmax(0, 1fr));
					gap: 14px;
					margin-bottom: 14px;
				}

				.metricCard {
					background: #fff;
					border-radius: 18px;
					border: 1px solid #eceff7;
					padding: 18px 18px;
					min-height: 106px;
					display: flex;
					align-items: center;
					gap: 12px;
					box-shadow: 0 8px 18px rgba(32, 47, 85, 0.04);
				}

				.metricIcon {
					width: 34px;
					height: 34px;
					border-radius: 50%;
					background: #eeefff;
					color: #4f46e5;
					border: 1px solid #e2e4ff;
					display: grid;
					place-items: center;
					flex-shrink: 0;
				}

				.metricCard p {
					margin: 0;
					color: #9ba3ba;
					font-size: 12px;
					font-weight: 600;
				}

				.metricCard h2 {
					margin: 2px 0 0;
					font-size: 42px;
					color: #1e2540;
					font-weight: 900;
					letter-spacing: -0.03em;
					line-height: 1;
				}

				.trend {
					margin-left: auto;
					font-size: 14px;
					font-weight: 800;
					letter-spacing: -0.01em;
				}

				.metricCard .trend.up {
					color: #2fbf73;
				}

				.metricCard .trend.down {
					color: #d85a63;
				}

				.up {
					color: #2ebf73;
				}

				.down {
					color: #dc5d6f;
				}

				.contentGrid {
					display: grid;
					grid-template-columns: 2fr 1fr;
					grid-template-rows: auto auto;
					gap: 14px;
				}

				.blockCard {
					background: #fff;
					border-radius: 20px;
					border: 1px solid #eceff7;
					padding: 20px;
				}

				.sessionsCard {
					grid-row: span 2;
					padding: 22px;
					min-height: 420px;
				}

				.cardHeader {
					display: flex;
					align-items: center;
					justify-content: space-between;
					gap: 8px;
					margin-bottom: 8px;
				}

				.cardHeader h3,
				.promoCard h3,
				.conversionCard h3 {
					margin: 0;
					font-size: 24px;
					color: #232c49;
					font-weight: 800;
					letter-spacing: -0.02em;
				}

				.cardHeader button {
					border: 1px solid #e5e8f2;
					background: #fff;
					color: #7f88a3;
					border-radius: 999px;
					padding: 8px 14px;
					font-size: 12px;
					font-weight: 800;
				}

				.sessionsNumbers {
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					margin-bottom: 10px;
					padding-bottom: 12px;
					border-bottom: 1px solid #eceff7;
				}

				.sessionsPrimary {
					display: flex;
					align-items: center;
					gap: 12px;
				}

				.sessionsIcon {
					width: 34px;
					height: 34px;
					border-radius: 50%;
					background: #eeefff;
					color: #4f46e5;
					border: 1px solid #e2e4ff;
					display: grid;
					place-items: center;
				}

				.sessionsNumbers p {
					margin: 0;
					color: #96a0b8;
					font-size: 14px;
					font-weight: 700;
				}

				.sessionsNumbers h4 {
					margin: 2px 0 0;
					font-size: 48px;
					line-height: 1;
					color: #1f2743;
					font-weight: 900;
					letter-spacing: -0.04em;
				}

				.sessionsNumbers strong,
				.sessionsNumbers span {
					display: block;
					text-align: right;
					font-size: 14px;
					font-weight: 800;
					line-height: 1.45;
				}

				.sessionsMeta {
					display: flex;
					flex-direction: column;
					align-items: flex-end;
					gap: 4px;
				}

				.sessionsMetaRow {
					display: flex;
					align-items: center;
					gap: 12px;
				}

				.sessionsCount {
					color: #5b57ef;
					font-weight: 900;
					font-size: 20px;
					line-height: 1;
				}

				.sessionsSubHeader {
					display: flex;
					align-items: center;
					justify-content: space-between;
					gap: 10px;
					margin-bottom: 8px;
				}

				.sessionsSubHeader h5 {
					margin: 0;
					font-size: 16px;
					color: #4b5573;
					font-weight: 800;
				}

				.monthFilterBtn {
					height: 34px;
					border-radius: 999px;
					border: 1px solid #e6e9f3;
					background: #fff;
					color: #9099b1;
					font-weight: 700;
					font-size: 13px;
					display: inline-flex;
					align-items: center;
					gap: 7px;
					padding: 0 12px;
				}

				.lineChartWrap {
					margin-top: 2px;
					margin-bottom: 10px;
				}

				.dayPagination {
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 8px;
				}

				.dayPagination button {
					width: 28px;
					height: 28px;
					border: 1px solid #e4e8f3;
					border-radius: 50%;
					background: #fff;
					color: #808aa7;
					display: grid;
					place-items: center;
				}

				.dayPagination span {
					color: #9aa4bc;
					font-weight: 700;
					font-size: 13px;
					min-width: 22px;
					text-align: center;
				}

				.dayPagination .activeDay {
					color: #fff;
					background: #4f46e5;
					width: 32px;
					height: 32px;
					border-radius: 50%;
					display: grid;
					place-items: center;
					box-shadow: 0 8px 16px rgba(79, 70, 229, 0.3);
				}

				.promoCard {
					background: linear-gradient(104deg, #4f46e5, #5148ff);
					color: #fff;
					position: relative;
					overflow: hidden;
					min-height: 190px;
				}

				.promoCard::after {
					content: "";
					position: absolute;
					right: -35px;
					top: -30px;
					width: 130px;
					height: 130px;
					border-radius: 50%;
					background: radial-gradient(circle at center, rgba(255, 255, 255, 0.35), transparent 68%);
				}

				.promoCard p {
					margin: 6px 0 0;
					color: rgba(255, 255, 255, 0.88);
				}

				.promoCard button {
					margin-top: 12px;
					border: none;
					border-radius: 999px;
					background: linear-gradient(90deg, #49ca80, #66d18f);
					color: #fff;
					height: 42px;
					padding: 0 20px;
					font-weight: 800;
				}

				.conversionCard {
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					min-height: 340px;
					gap: 8px;
				}

				.conversionCard h3 {
					margin-bottom: 0;
				}

				.gaugeWrap {
					position: relative;
					margin-top: 0;
					margin-bottom: 0;
					min-height: 235px;
				}

				.gaugeNeedle {
					position: absolute;
					left: 78%;
					top: 44%;
					width: 4px;
					height: 54px;
					background: #9ea4ea;
					border-radius: 999px;
					transform: rotate(52deg);
					transform-origin: center center;
					pointer-events: none;
				}

				.conversionValue {
					position: absolute;
					left: 50%;
					top: 67%;
					transform: translate(-50%, -50%);
					width: 100%;
					text-align: center;
					pointer-events: none;
				}

				.conversionValue strong {
					display: block;
					font-size: 36px;
					color: #222b47;
					line-height: 1;
					letter-spacing: -0.03em;
					font-weight: 900;
				}

				.conversionValue span {
					color: #30bf74;
					font-size: 15px;
					font-weight: 800;
				}

				.conversionStats {
					display: flex;
					justify-content: space-between;
					gap: 12px;
					margin-top: -4px;
					padding-top: 0;
				}

				.conversionStats p {
					margin: 0;
					display: flex;
					gap: 6px;
					align-items: center;
					color: #8e97af;
					font-size: 13px;
					font-weight: 700;
				}

				.conversionStats p:first-child svg {
					color: #33be76;
				}

				.conversionStats p:last-child svg {
					color: #2f3856;
				}

				.conversionStats strong {
					color: #2f3856;
					font-size: 13px;
					font-weight: 800;
					letter-spacing: -0.02em;
				}

				@media (max-width: 1140px) {
					.dashboardCard {
						grid-template-columns: 1fr;
					}

					.sidebar {
						border-right: none;
						border-bottom: 1px solid #eceef5;
					}

					.contentGrid,
					.statsGrid {
						grid-template-columns: 1fr;
					}

					.sessionsCard {
						grid-row: span 1;
					}
				}
			`}</style>
		</div>
	)
}