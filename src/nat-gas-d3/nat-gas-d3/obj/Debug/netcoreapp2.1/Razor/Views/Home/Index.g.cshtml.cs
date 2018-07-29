#pragma checksum "D:\Dev\nat-gas-d3\src\nat-gas-d3\nat-gas-d3\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "8d8d41aad203b9ddc7ab125d054f02d8e1b13b8c"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Home/Index.cshtml", typeof(AspNetCore.Views_Home_Index))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"8d8d41aad203b9ddc7ab125d054f02d8e1b13b8c", @"/Views/Home/Index.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/data/Natural_Gas_Prices_in_Colorado.csv"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/data/dpr-data_csv.csv"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 1 "D:\Dev\nat-gas-d3\src\nat-gas-d3\nat-gas-d3\Views\Home\Index.cshtml"
  
    ViewData["Title"] = "Home Page";

#line default
#line hidden
            BeginContext(45, 7145, true);
            WriteLiteral(@"
<div class=""row"">
    <div class=""col-md-12"">
        <div class=""card"">
            <h2>Residential and Commercial Price of Natural Gas in Colorado Over Time</h2>
            <div class=""card-text"">
                <p>This dashboard is designed to illustrate a relationship between the price of natural gas in Colorado, and production of natural gas in the Niobrara Basin.  The Niobrara basin extends over much of northeastern Colorado and southwestern Nebraska.  The close geographic proximity of the Niobrara basin to the Denver-Boulder metropolitan region should lead to a correlation between the price of natural gas in Colorado and production in the Niobrara basin.</p>
                <p>The first chart presented shows the price of natural gas in $ per million cubic feet for commercial and residential customers displayed over time.  This chart covers a time period between the late 1980s and 2017.  The second shows the total production of natural gas in million cubif feet in the Niobrara basin.</p>
    ");
            WriteLiteral(@"            <div id=""about""  class=""card-button-block"">
                    <button id=""btnViewAbout"" type=""button"" class=""btn btn-primary right"">About the Visualization</button>
                </div>
                <div id=""start"" class=""card-button-block graph-hidden"">
                    <button id=""btnGoToAboutBack"" type=""button"" class=""btn btn-primary"">Go Back</button>
                    <button id=""btnStart"" type=""button"" class=""btn btn-primary right"">View Residential and Commerical Prices</button>
                </div>
                <div id=""rescomm"" class=""card-button-block graph-hidden"">
                    <button id=""btnGoToStart"" type=""button"" class=""btn btn-primary"">Go Back</button>
                    <button id=""btnGoToNiobara"" type=""button"" class=""btn btn-primary right"">View Niobara Basin Production</button>
                </div>
                <div id=""nioblock"" class=""card-button-block graph-hidden"">
                    <button id=""btnGoToResCom"" type=""button"" class=""btn ");
            WriteLiteral(@"btn-primary"">Go Back</button>
                </div>
            </div>
            <div id=""aboutthevisualization"" class=""card-block graph-hidden"">
                <h4>About the Visualization</h4>
                <h6>Structure</h6>
                <p>The following visualization follows a slide show layout. The individual slides are html divs whose visibility state is controlled through button clicks. Buttons on the right allow the user to advance through the visualizations, with each slide having buttons on the left to go back.</p>
                <h6>Utilization of Scense</h6>
                <p>There are three main “scenes” being presented to the user.  Each slide is identified by an h4 tag with the title of the slide, followed by any text, descriptions, or interactive controls.  The first, the “About the Visualization” slide is the current slide being presented. This slide describes the visualization at a high level. The second slide presents residential and commercial gas prices over time. This a");
            WriteLiteral(@"llows user to see the highly variable and cyclic nature of natural gas prices, particularly during the high spikes during winter when demand is high. The last slide presents production of natural gas in the Niobrara basin that resides in the north eastern part of Colorado. The large Denver-Boulder metropolitan area is the closest and densest population area to the Niobrara play. We would assume that production in the Niobrara play to have a fairly large impact on the prices of natural gas in Colorado. Users can examine the data between the two data sets by transitioning between the slides.</p>
                <p>Both graphs presented are line charts to depict the change in a data point over time.  The first chart presents the price of natural gas per million cubic feet in US Dollars over time.  There are two series on the graph in the second scene, presenting the price of natural gas for residential customers and commercial customers between 1980 and 2018.  The minimum price we can see on this chart is under");
            WriteLiteral(@" 4 dollars, with a high around 16 dollars.  The y axis minimum starts at zero since this does not overly skew the graph with too much white space.</p>
                <p>The second chart in scene three presents the total production of natural gas in million cubic feet in the Niobrara basin.  There is one series on the graph presenting this information for the dates beteween 2007 and 2018.  The minimum production for the data points provided is 3,400,000 million cubic feet.  The most production presented is aroudn 5,000,000 cubic feet.  Because the lowest value is so high, the y axis begins at 2,800,000 in order to remove some white space.</p>
                <h6>Utilization of Annotations</h6>
                <p>The annotations for the second scene presenting the price of natural gas for residential and commercial customers are the legend which consists of text placed with D3, and a filled in rectangle with the color of the trend line.  There is also text for the x and y lines to provide information on the");
            WriteLiteral(@" units and represetnation of the particular axis.  Glyphs were embedded using D3 for each data point on the line.</p>
                <p>The annotations for the third and final scene presenting the total production of natural gas in the Niobrara basin are the legend which consists of text placed with D3, and a filled in rectangle with the color of the trend line.  There is also text for the x and y lines to provide information on the units and represetnation of the particular axis.  Glyphs were embedded using D3 for each data point on the line.</p>
                <h6>Utilization of Parameters</h6>
                <p>There are two parameters tracked in the second scene presenting the price of natural gas.  Each parameter is represnted by the state of it's respective checkbox.  This parameter is a boolean value.  For example when the state of the residential checkbox is false, the residential price trend line and associated glyphs should not be presented.  When the state of the commercial checkbox is false,");
            WriteLiteral(@" the commercial price line trend and associated glyphs should not be presented.  When the respective checkbox is true, the line and glyphs should be rendered.</p>
                <h6>Utilization of Triggers</h6>
                <p>The main trigger in this visualization is action of the user checking or unchecking either the residential or commercial gas checkbox.  When this event is raised, the javascript running on the page will clear the residential and commercial natural gas SVG graph.  Once the graph is wiped, the code determines the state of the parameters provided before, and then redraws the graph accordingly.</p>
                <h6>Data Sets</h6>
                <p>There are two data sets that are used in rendering this visualization.  Both sets of data can be found at the <a href=""https://www.eia.gov/naturalgas/"">US Energy Information Administration</a>.  The first, is a CSV file with three columns: date, residential price, and commercial price.  A link can be found here: ");
            EndContext();
            BeginContext(7190, 86, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4f082a0a21da431fa08acd59bb0851d8", async() => {
                BeginContext(7242, 30, true);
                WriteLiteral("Natural Gas Prices in Colorado");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(7276, 124, true);
            WriteLiteral("</p>\r\n                <p>The second, is a CSV file with two columns: date, and total production.  A link can be found here: ");
            EndContext();
            BeginContext(7400, 70, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4ba6e6678518497fb253719b2a3f52b0", async() => {
                BeginContext(7434, 32, true);
                WriteLiteral("Production in the Niobrara Basin");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(7470, 1128, true);
            WriteLiteral(@".</p>
            </div>
            <div id=""residentialCommercialGraphBlock"" class=""graph card-block graph-hidden"">
                <h4>Residential and Commercial Price of Natural Gas in Colorado Over Time</h4>
                <p>Use the checkboxes to select which trend you want to inspect.</p>
                <div style=""width: 100%;"">
                    <div class=""text-center"">
                        <input type=""checkbox"" id=""Residential_Price"" checked=""checked"" class=""checkbox-inline"">Residental Price
                        <input type=""checkbox"" id=""Commercial_Price"" checked=""checked"" class=""checkbox-inline"">Commercial Price    
                    </div>
                </div>
                <svg width=""100%"" height=""100%"" id=""residentialCommercial""></svg>
            </div>
            <div id=""niobaraProductionGraphBlock"" class=""graph card-block graph-hidden"">
                <h4>Production of Natural Gas in Mcf in the Niobrara Basin Over Time</h4>
                <svg width=""100");
            WriteLiteral("%\" height=\"100%\" id=\"niobaraProduction\"></svg>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
