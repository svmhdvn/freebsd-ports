# Toplevel Makefile for Xymon

BUILDTOPDIR=`pwd`

# configure settings for Xymon
#
# Toplevel dir
XYMONTOPDIR = ${PREFIX}/www/xymon
# Server home dir for etc/, bin/
XYMONHOME = ${PREFIX}/www/xymon/server
# Server data dir for hist/ etc.
XYMONVAR = ${PREFIX}/www/xymon/data
# CGI scripts go in CGIDIR
CGIDIR = ${PREFIX}/www/xymon/cgi-bin
# Admin CGI scripts go in SECURECGIDIR
SECURECGIDIR = ${PREFIX}/www/xymon/cgi-secure
# Where to put logfiles
XYMONLOGDIR = /var/log/xymon
# Where to install manpages
MANROOT = ${PREFIX}/share/man
# How to run fping or xymonping
FPING = fping

# Username running xymon
#XYMONUSER = nobody
# Xymon server hostname
#XYMONHOSTNAME = xymon.example.com
# Xymon server IP-address
#XYMONHOSTIP = 127.0.0.1
# Xymon server OS
XYMONHOSTOS = freebsd

# URL for Xymon webpages
XYMONHOSTURL = /xymon
# URL for Xymon CGIs
XYMONCGIURL = /xymon-cgi
# URL for Xymon Admin CGIs
SECUREXYMONCGIURL = /xymon-seccgi
# Webserver group-ID
HTTPDGID=80

# C-ARES settings
SYSTEMCARES = yes
CARESINCDIR = -I${LOCALBASE}/include
CARESLIBS = -L${LOCALBASE}/lib -lcares
RPATHVAL += ${LOCALBASE}/lib

# PCRE settings
PCREINCDIR = -I${LOCALBASE}/include
PCRELIBS = -L${LOCALBASE}/lib -lpcre
RPATHVAL += ${LOCALBASE}/lib

# RRDtool settings
RRDDEF = -DRRDTOOL12
RRDINCDIR = -I${LOCALBASE}/include
RRDLIBS = -L${LOCALBASE}/lib -lrrd -L${LOCALBASE}/lib -lpng
RPATHVAL += ${LOCALBASE}/lib
DORRD = yes
#
# OpenSSL settings
SSLFLAGS = -DHAVE_OPENSSL

ifneq (${OPENSSLLIB},/usr/lib)
SSLINCDIR = -I${OPENSSLINC}
SSLLIBS = -L${OPENSSLLIB} -lssl -lcrypto
RPATHVAL += ${OPENSSLLIB}
else
SSLLIBS = -lssl -lcrypto
endif
DOSSL = yes
#
ifdef WITH_LDAP
# OpenLDAP settings
LDAPFLAGS = -DXYMON_LDAP -DXYMON_LDAP_USESTARTTLS -DHAVE_LDAP
LDAPINCDIR = -I${PREFIX}/include
LDAPLIBS = -L${PREFIX}/lib -lldap -llber
ifneq (${OPENSSLLIB},/usr/lib)
RPATHVAL += ${PREFIX}/lib
endif
RPATHVAL += /usr/local/lib
DOLDAP = yes
endif
#
# clock_gettime() settings
LIBRTDEF =

ifdef WITH_NETSNMP
# Net-SNMP settings
DOSNMP = yes
else
DOSNMP = no
endif

# Large File Support settings
LFSDEF = -D_LARGEFILE_SOURCE -D_FILE_OFFSET_BITS=64

include build/Makefile.FreeBSD

# Add local CFLAGS, etc. settings here

include build/Makefile.rules
