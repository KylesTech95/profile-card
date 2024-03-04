--
-- PostgreSQL database dump
--

-- Dumped from database version 13.14 (Debian 13.14-0+deb11u1)
-- Dumped by pg_dump version 13.14 (Debian 13.14-0+deb11u1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: location; Type: TABLE; Schema: public; Owner: kylestech95
--

CREATE TABLE public.location (
    loc_id integer NOT NULL,
    address character varying(60),
    city character varying(60) NOT NULL,
    state character varying(30) NOT NULL,
    zip text NOT NULL,
    phone text NOT NULL
);


ALTER TABLE public.location OWNER TO kylestech95;

--
-- Name: location_loc_id_seq; Type: SEQUENCE; Schema: public; Owner: kylestech95
--

CREATE SEQUENCE public.location_loc_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.location_loc_id_seq OWNER TO kylestech95;

--
-- Name: location_loc_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kylestech95
--

ALTER SEQUENCE public.location_loc_id_seq OWNED BY public.location.loc_id;


--
-- Name: profile; Type: TABLE; Schema: public; Owner: kylestech95
--

CREATE TABLE public.profile (
    id integer NOT NULL,
    fname character varying(30) NOT NULL,
    lname character varying(30) NOT NULL,
    username character varying(30) NOT NULL,
    phone text NOT NULL,
    email character varying(60)
);


ALTER TABLE public.profile OWNER TO kylestech95;

--
-- Name: profile_id_seq; Type: SEQUENCE; Schema: public; Owner: kylestech95
--

CREATE SEQUENCE public.profile_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.profile_id_seq OWNER TO kylestech95;

--
-- Name: profile_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kylestech95
--

ALTER SEQUENCE public.profile_id_seq OWNED BY public.profile.id;


--
-- Name: location loc_id; Type: DEFAULT; Schema: public; Owner: kylestech95
--

ALTER TABLE ONLY public.location ALTER COLUMN loc_id SET DEFAULT nextval('public.location_loc_id_seq'::regclass);


--
-- Name: profile id; Type: DEFAULT; Schema: public; Owner: kylestech95
--

ALTER TABLE ONLY public.profile ALTER COLUMN id SET DEFAULT nextval('public.profile_id_seq'::regclass);


--
-- Data for Name: location; Type: TABLE DATA; Schema: public; Owner: kylestech95
--

COPY public.location (loc_id, address, city, state, zip, phone) FROM stdin;
\.


--
-- Data for Name: profile; Type: TABLE DATA; Schema: public; Owner: kylestech95
--

COPY public.profile (id, fname, lname, username, phone, email) FROM stdin;
\.


--
-- Name: location_loc_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kylestech95
--

SELECT pg_catalog.setval('public.location_loc_id_seq', 1, false);


--
-- Name: profile_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kylestech95
--

SELECT pg_catalog.setval('public.profile_id_seq', 1, false);


--
-- Name: location location_pkey; Type: CONSTRAINT; Schema: public; Owner: kylestech95
--

ALTER TABLE ONLY public.location
    ADD CONSTRAINT location_pkey PRIMARY KEY (loc_id);


--
-- Name: profile profile_phone_key; Type: CONSTRAINT; Schema: public; Owner: kylestech95
--

ALTER TABLE ONLY public.profile
    ADD CONSTRAINT profile_phone_key UNIQUE (phone);


--
-- Name: profile profile_pkey; Type: CONSTRAINT; Schema: public; Owner: kylestech95
--

ALTER TABLE ONLY public.profile
    ADD CONSTRAINT profile_pkey PRIMARY KEY (id);


--
-- Name: location location_phone_fkey; Type: FK CONSTRAINT; Schema: public; Owner: kylestech95
--

ALTER TABLE ONLY public.location
    ADD CONSTRAINT location_phone_fkey FOREIGN KEY (phone) REFERENCES public.profile(phone);


--
-- PostgreSQL database dump complete
--

