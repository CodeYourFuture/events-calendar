--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.14
-- Dumped by pg_dump version 9.5.14

-- Started on 2018-11-13 19:58:39 GMT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE events_calendar;
--
-- TOC entry 2173 (class 1262 OID 24944)
-- Name: events_calendar; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE events_calendar WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_GB.UTF-8' LC_CTYPE = 'en_GB.UTF-8';


\connect events_calendar

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12393)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2175 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_with_oids = false;

--
-- TOC entry 181 (class 1259 OID 24945)
-- Name: events_tbl; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.events_tbl (
    event_id integer NOT NULL,
    lesson character varying(55),
    event_date date,
    description text
);


--
-- TOC entry 182 (class 1259 OID 24951)
-- Name: events_tbl_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.events_tbl_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2176 (class 0 OID 0)
-- Dependencies: 182
-- Name: events_tbl_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.events_tbl_id_seq OWNED BY public.events_tbl.event_id;


--
-- TOC entry 183 (class 1259 OID 24953)
-- Name: floaters_events_tbl; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.floaters_events_tbl (
    floaters_events_id integer NOT NULL,
    event_id integer NOT NULL,
    floater_id integer NOT NULL
);


--
-- TOC entry 184 (class 1259 OID 24956)
-- Name: floaters_events_tbl_floaters_events_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.floaters_events_tbl_floaters_events_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2177 (class 0 OID 0)
-- Dependencies: 184
-- Name: floaters_events_tbl_floaters_events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.floaters_events_tbl_floaters_events_id_seq OWNED BY public.floaters_events_tbl.floaters_events_id;


--
-- TOC entry 185 (class 1259 OID 24958)
-- Name: floaters_tbl; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.floaters_tbl (
    floater_id integer NOT NULL,
    floater_fname character(255),
    floater_surname character(255),
    floater_email character varying(255)
);


--
-- TOC entry 186 (class 1259 OID 24964)
-- Name: floaters_floaters_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.floaters_floaters_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2178 (class 0 OID 0)
-- Dependencies: 186
-- Name: floaters_floaters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.floaters_floaters_id_seq OWNED BY public.floaters_tbl.floater_id;


--
-- TOC entry 187 (class 1259 OID 24966)
-- Name: floaters_tbl_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.floaters_tbl_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2033 (class 2604 OID 24968)
-- Name: event_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.events_tbl ALTER COLUMN event_id SET DEFAULT nextval('public.events_tbl_id_seq'::regclass);


--
-- TOC entry 2034 (class 2604 OID 24969)
-- Name: floaters_events_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.floaters_events_tbl ALTER COLUMN floaters_events_id SET DEFAULT nextval('public.floaters_events_tbl_floaters_events_id_seq'::regclass);


--
-- TOC entry 2035 (class 2604 OID 24970)
-- Name: floater_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.floaters_tbl ALTER COLUMN floater_id SET DEFAULT nextval('public.floaters_floaters_id_seq'::regclass);


--
-- TOC entry 2161 (class 0 OID 24945)
-- Dependencies: 181
-- Data for Name: events_tbl; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (1, 'HTML/CSS 1', '2018-12-01', 'HTML Syntax
You''re already familiar with HTML code from your application process. If you want to refresh your memory, read this quick guide to the HTML syntax.

Example HTML/CSS Project
In today''s class, we will begin adapting styles on this example website. We''ll review some of the HTML/CSS basics you already encountered during your application process and learn some new techniques. By the end of the third lesson, we will have worked together to improve the example site on the left so that it looks like the screenshot on the right.

Semantic HTML
When writing HTML code, you can use different tags to describe the content. Is it a navigation menu, a paragraph of text, or an article? By using the correct tag, you help search engines like Google or screen readers for the visually impaired.

CSS Selectors
During your application process, you became familiar with CSS selectors. We''ll review the basic selectors and then practice combining these to modify our button styles.

Pseudo Classes
There are also things called "pseudo" classes. In this section, we''ll introduce you to the common pseudo classes for assigning styles to interactions, such as moving your mouse over a link.

Box Model
In CSS, everything is a box. An image is a box. A link is a box. The area around this box can be modified with properites that we call margins, borders and padding. Here''s a diagram showing what the box looks like.

Git Conflicts
As a professional, you''ll usually need to work alongside other coders to build an app or website. We use version control to coordinate changes and manage any conflicts that arise. Git is a version control system which helps us merge code that we''ve been working on separately into one common codebase.

');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (3, 'HTML/CSS 2', '2018-12-08', 'Responsive Web Design
When we build for the web, we''re making websites that can be viewed in a phone, a laptop, a tablet and more. To ensure we''re presenting a website that''s easy to use on any device, we use Responsive Web Design techniques to modify how content is displayed depending on the viewport.

Media Queries
As you learned in your homework assignment, media queries help us change the display of our content depending on the size of the viewport.

Flexbox
Flexbox is a name for a set of CSS layout rules which are supported in newer browsers. They allow you to apply rules to elements to place them side-by-side and re-arrange them. You just specify how you want your elements arranged and the browser will scale this arrangement depending on the screen size and device used for viewing.

Most flexbox rules are applied to the container, to tell it how to arrange its children. However, there are some rules that can be applied to children as well.

');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (4, 'HTML/CSS 3', '2018-12-15', 'HTML/CSS Frameworks
A design framework is a collection of re-usable code snippets which you can use to build a website. It is sometimes called a "design system", "style guide", or "pattern library", and will usually consist of three things:

Brand guidelines define the appropriate typography, colors and logos to use.
Components define re-usable code snippets for common requirements, like navigation menus.
Helpers define additional code tools to construct the site, like layout grids.
The main goals of a design framework are to ensure design consistency and avoid writing the same code twice.

Bootstrap 4
Bootstrap is CSS and JavaScript code that we load in our HTML pages. Bootstrap''s documentation describes how to write HTML code that fits the Bootstrap components, including a grid layout as well as several components.

Personal Websites
Over the last two weeks, you''ve been building personal websites as part of your homework. Now we want you to take those websites and apply the knowledge you''ve learned to make them as good as you can. Some ideas:

Add Bootstrap 4 to your site and use some of the components.
Use re-usable class names to reduce your CSS code.
Validate your HTML code to find and fix problems.
Add a second page and link to it from your first page.
Try to style the first article differently so that it stands out from the rest.
By the end, you should have created a repository for your site on GitHub with all the commits you''ve made.

Retrospective
At the end of each module, we''ll have a retrospective. What went right? What went wrong? What can we do better to help you learn? Let''s discuss the HTML/CSS module.');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (5, 'JavaScript Core I - 1', '2018-12-23', 'What we will learn today?

Install Node
Setup IDE
Hello World
Variables
Strings
String concatenation
Numbers
Floats
Functions
Function Parameters
Nested Functions

1-Install Node
Windows and Mac users
Linux (Ubuntu) users

');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (6, 'JavaScript Core I - 2', '2018-01-05', 'What we will learn today?

Expressions
Boolean Filters
Comparison operators
Predicates
Conditionals
Logical Operators
More Conditionals
Array literals
Array properties
Array getters and setters
Array methods
More Array methods
Array map');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (7, 'JavaScript Core I - 3', '2018-01-12', 'What we will learn today?

Array Find
Array Some
Array Every
Array Filter
Array Map
Array ForEach
');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (8, 'JavaScript Core II - 1', '2018-01-20', 'What we will learn today?

Objects
Objects Get and Set
More complex objects
Object methods
Arrays of Objects
Object.Keys()');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (9, 'JavaScript Core II - 2', '2018-01-24', 'What we will learn today?

JS In the Browser (The DOM)
Callbacks and Asynchronous Functions
Promises
AJAX
');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (10, 'JavaScript Core II - 3', '2018-02-01', 'More JS in the Browser
Fork, clone and follow the instructions on the Dom-AJAX workshop repo');


--
-- TOC entry 2179 (class 0 OID 0)
-- Dependencies: 182
-- Name: events_tbl_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.events_tbl_id_seq', 10, true);


--
-- TOC entry 2163 (class 0 OID 24953)
-- Dependencies: 183
-- Data for Name: floaters_events_tbl; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.floaters_events_tbl (floaters_events_id, event_id, floater_id) VALUES (2, 1, 1);
INSERT INTO public.floaters_events_tbl (floaters_events_id, event_id, floater_id) VALUES (4, 1, 2);
INSERT INTO public.floaters_events_tbl (floaters_events_id, event_id, floater_id) VALUES (6, 3, 1);
INSERT INTO public.floaters_events_tbl (floaters_events_id, event_id, floater_id) VALUES (7, 4, 3);
INSERT INTO public.floaters_events_tbl (floaters_events_id, event_id, floater_id) VALUES (8, 3, 5);
INSERT INTO public.floaters_events_tbl (floaters_events_id, event_id, floater_id) VALUES (9, 4, 5);
INSERT INTO public.floaters_events_tbl (floaters_events_id, event_id, floater_id) VALUES (10, 5, 5);
INSERT INTO public.floaters_events_tbl (floaters_events_id, event_id, floater_id) VALUES (11, 6, 6);


--
-- TOC entry 2180 (class 0 OID 0)
-- Dependencies: 184
-- Name: floaters_events_tbl_floaters_events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.floaters_events_tbl_floaters_events_id_seq', 11, true);


--
-- TOC entry 2181 (class 0 OID 0)
-- Dependencies: 186
-- Name: floaters_floaters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.floaters_floaters_id_seq', 2, true);


--
-- TOC entry 2165 (class 0 OID 24958)
-- Dependencies: 185
-- Data for Name: floaters_tbl; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (3, 'Nadine                                                                                                                                                                                                                                                         ', 'Dodo                                                                                                                                                                                                                                                           ', 'nadine@hotmail.com');
INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (5, 'Naty                                                                                                                                                                                                                                                           ', 'Smith                                                                                                                                                                                                                                                          ', 'nsmith@yahoo.com');
INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (6, 'Naty                                                                                                                                                                                                                                                           ', 'Smith                                                                                                                                                                                                                                                          ', 'nsmith@yahoo.com');
INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (4, 'Nany                                                                                                                                                                                                                                                           ', 'Colen                                                                                                                                                                                                                                                          ', 'namy@yahoo.com');
INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (7, 'Nany                                                                                                                                                                                                                                                           ', 'Colen                                                                                                                                                                                                                                                          ', 'namy@yahoo.com');
INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (8, 'Steve                                                                                                                                                                                                                                                          ', 'Bbbbb                                                                                                                                                                                                                                                          ', 'stevebalhawan@gmail.com');
INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (9, 'Steve                                                                                                                                                                                                                                                          ', 'Bbbbb                                                                                                                                                                                                                                                          ', 'stevebalhawan@gmail.com');
INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (10, 'Steve                                                                                                                                                                                                                                                          ', 'Bbbbb                                                                                                                                                                                                                                                          ', 'stevebalhawan@gmail.com');
INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (11, 'Steve                                                                                                                                                                                                                                                          ', 'Bbbbb                                                                                                                                                                                                                                                          ', 'stevebalhawan@gmail.com');
INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (12, 'Steve                                                                                                                                                                                                                                                          ', 'Bbbbb                                                                                                                                                                                                                                                          ', 'stevebalhawan@gmail.com');
INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (13, 'Steve                                                                                                                                                                                                                                                          ', 'Bbbbb                                                                                                                                                                                                                                                          ', 'stevebalhawan@gmail.com');
INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (14, 'Steve                                                                                                                                                                                                                                                          ', 'Bbbbb                                                                                                                                                                                                                                                          ', 'stevebalhawan@gmail.com');
INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (15, 'Steve                                                                                                                                                                                                                                                          ', 'Bbbbb                                                                                                                                                                                                                                                          ', 'stevebalhawan@gmail.com');
INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (16, 'Steve                                                                                                                                                                                                                                                          ', 'Bbbbb                                                                                                                                                                                                                                                          ', 'stevebalhawan@gmail.com');
INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (17, 'Steve                                                                                                                                                                                                                                                          ', 'Bbbbb                                                                                                                                                                                                                                                          ', 'stevebalhawan@gmail.com');
INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (18, 'Steve                                                                                                                                                                                                                                                          ', 'Bbbbb                                                                                                                                                                                                                                                          ', 'stevebalhawan@gmail.com');
INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (2, 'Steve                                                                                                                                                                                                                                                          ', 'Balhawan                                                                                                                                                                                                                                                       ', 'stevebalhawan@gmail.com');
INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (1, 'Daleel                                                                                                                                                                                                                                                         ', 'Haji                                                                                                                                                                                                                                                           ', 'daleel@gmail.com');


--
-- TOC entry 2182 (class 0 OID 0)
-- Dependencies: 187
-- Name: floaters_tbl_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.floaters_tbl_seq', 1, false);


--
-- TOC entry 2037 (class 2606 OID 24972)
-- Name: events_tbl_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.events_tbl
    ADD CONSTRAINT events_tbl_pkey PRIMARY KEY (event_id);


--
-- TOC entry 2044 (class 2606 OID 24974)
-- Name: floater_id_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.floaters_tbl
    ADD CONSTRAINT floater_id_pkey PRIMARY KEY (floater_id);


--
-- TOC entry 2040 (class 2606 OID 24976)
-- Name: floaters_events_id; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.floaters_events_tbl
    ADD CONSTRAINT floaters_events_id PRIMARY KEY (floaters_events_id);


--
-- TOC entry 2042 (class 2606 OID 24978)
-- Name: unique_event_floater; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.floaters_events_tbl
    ADD CONSTRAINT unique_event_floater UNIQUE (event_id, floater_id);


--
-- TOC entry 2038 (class 1259 OID 24979)
-- Name: fki_event_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX fki_event_id ON public.floaters_events_tbl USING btree (event_id);


--
-- TOC entry 2045 (class 2606 OID 24980)
-- Name: event_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.floaters_events_tbl
    ADD CONSTRAINT event_id FOREIGN KEY (event_id) REFERENCES public.events_tbl(event_id) ON DELETE CASCADE;


--
-- TOC entry 2046 (class 2606 OID 24985)
-- Name: floater_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.floaters_events_tbl
    ADD CONSTRAINT floater_id FOREIGN KEY (floater_id) REFERENCES public.floaters_tbl(floater_id) ON DELETE CASCADE;


-- Completed on 2018-11-13 19:58:39 GMT

--
-- PostgreSQL database dump complete
--

