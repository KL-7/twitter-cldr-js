/*
// Copyright 2012 Twitter, Inc
// http://www.apache.org/licenses/LICENSE-2.0

// TwitterCLDR (JavaScript) v1.0.0
// Authors:     Cameron Dutro [@camertron]
                Kirill Lashuk [@KL_7]
                portions by Sven Fuchs [@svenfuchs]
// Homepage:    https://twitter.com
// Description: Provides date, time, number, and list formatting functionality for various Twitter-supported locales in Javascript.
*/

var TwitterCldr, key, obj,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

TwitterCldr = {};

TwitterCldr.PluralRules = (function() {

  function PluralRules() {}

  PluralRules.rules = {"keys": ["one","other"], "rule": function(n) { return (function() { if (n == 1) { return "one" } else { return "other" } })(); }};

  PluralRules.all = function() {
    return this.rules.keys;
  };

  PluralRules.rule_for = function(number) {
    try {
      return this.rules.rule(number);
    } catch (error) {
      return "other";
    }
  };

  return PluralRules;

})();

TwitterCldr.TimespanFormatter = (function() {

  function TimespanFormatter() {
    this.default_type = "default";
    this.tokens = {"ago":{"second":{"default":{"one":[{"value":"1 seconde geleden","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" seconden geleden","type":"plaintext"}]}},"minute":{"default":{"one":[{"value":"1 minuut geleden","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" minuten geleden","type":"plaintext"}]}},"hour":{"default":{"one":[{"value":"1 uur geleden","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" uur geleden","type":"plaintext"}]}},"day":{"default":{"one":[{"value":"1 dag geleden","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" dagen geleden","type":"plaintext"}]}},"week":{"default":{"one":[{"value":"1 week geleden","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" weken geleden","type":"plaintext"}]}},"month":{"default":{"one":[{"value":"1 maand geleden","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" maanden geleden","type":"plaintext"}]}},"year":{"default":{"one":[{"value":"1 jaar geleden","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" jaar geleden","type":"plaintext"}]}}},"until":{"second":{"default":{"one":[{"value":"Over 1 seconde","type":"plaintext"}],"other":[{"value":"Over ","type":"plaintext"},{"value":"{0}","type":"placeholder"},{"value":" seconden","type":"plaintext"}]}},"minute":{"default":{"one":[{"value":"Over 1 minuut","type":"plaintext"}],"other":[{"value":"Over ","type":"plaintext"},{"value":"{0}","type":"placeholder"},{"value":" minuten","type":"plaintext"}]}},"hour":{"default":{"one":[{"value":"Over 1 uur","type":"plaintext"}],"other":[{"value":"Over ","type":"plaintext"},{"value":"{0}","type":"placeholder"},{"value":" uur","type":"plaintext"}]}},"day":{"default":{"one":[{"value":"Over 1 dag","type":"plaintext"}],"other":[{"value":"Over ","type":"plaintext"},{"value":"{0}","type":"placeholder"},{"value":" dagen","type":"plaintext"}]}},"week":{"default":{"one":[{"value":"Over 1 week","type":"plaintext"}],"other":[{"value":"Over ","type":"plaintext"},{"value":"{0}","type":"placeholder"},{"value":" weken","type":"plaintext"}]}},"month":{"default":{"one":[{"value":"Over 1 maand","type":"plaintext"}],"other":[{"value":"Over ","type":"plaintext"},{"value":"{0}","type":"placeholder"},{"value":" maanden","type":"plaintext"}]}},"year":{"default":{"one":[{"value":"Over 1 jaar","type":"plaintext"}],"other":[{"value":"Over ","type":"plaintext"},{"value":"{0}","type":"placeholder"},{"value":" jaar","type":"plaintext"}]}}},"none":{"second":{"default":{"one":[{"value":"{0}","type":"placeholder"},{"value":" seconde","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" seconden","type":"plaintext"}]},"short":{"one":[{"value":"{0}","type":"placeholder"},{"value":" sec.","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" sec.","type":"plaintext"}]},"abbreviated":{"one":[{"value":"{0}","type":"placeholder"},{"value":"s","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":"s","type":"plaintext"}]}},"minute":{"default":{"one":[{"value":"{0}","type":"placeholder"},{"value":" minuut","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" minuten","type":"plaintext"}]},"short":{"one":[{"value":"{0}","type":"placeholder"},{"value":" min.","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" min.","type":"plaintext"}]},"abbreviated":{"one":[{"value":"{0}","type":"placeholder"},{"value":"m","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":"m","type":"plaintext"}]}},"hour":{"default":{"one":[{"value":"{0}","type":"placeholder"},{"value":" uur","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" uur","type":"plaintext"}]},"short":{"one":[{"value":"{0}","type":"placeholder"},{"value":" u","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" u","type":"plaintext"}]},"abbreviated":{"one":[{"value":"{0}","type":"placeholder"},{"value":"u","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":"u","type":"plaintext"}]}},"day":{"default":{"one":[{"value":"{0}","type":"placeholder"},{"value":" dag","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" dagen","type":"plaintext"}]},"short":{"one":[{"value":"{0}","type":"placeholder"},{"value":" dag","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" dagen","type":"plaintext"}]},"abbreviated":{"one":[{"value":"{0}","type":"placeholder"},{"value":"d","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":"d","type":"plaintext"}]}},"week":{"default":{"one":[{"value":"{0}","type":"placeholder"},{"value":" week","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" weken","type":"plaintext"}]},"short":{"one":[{"value":"{0}","type":"placeholder"},{"value":" wk","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" wkn","type":"plaintext"}]}},"month":{"default":{"one":[{"value":"{0}","type":"placeholder"},{"value":" maand","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" maanden","type":"plaintext"}]},"short":{"one":[{"value":"{0}","type":"placeholder"},{"value":" mnd","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" mnd","type":"plaintext"}]}},"year":{"default":{"one":[{"value":"{0}","type":"placeholder"},{"value":" jaar","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" jaar","type":"plaintext"}]},"short":{"one":[{"value":"{0}","type":"placeholder"},{"value":" jr","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" jr","type":"plaintext"}]}}}};
    this.time_in_seconds = {
      "second": 1,
      "minute": 60,
      "hour": 3600,
      "day": 86400,
      "week": 604800,
      "month": 2629743.83,
      "year": 31556926
    };
  }

  TimespanFormatter.prototype.format = function(seconds, options) {
    var number, strings, token;
    if (options == null) {
      options = {};
    }
    options["direction"] || (options["direction"] = (seconds < 0 ? "ago" : "until"));
    if (options["unit"] === null || options["unit"] === void 0) {
      options["unit"] = this.calculate_unit(Math.abs(seconds));
    }
    options["type"] || (options["type"] = this.default_type);
    options["number"] = this.calculate_time(Math.abs(seconds), options["unit"]);
    number = this.calculate_time(Math.abs(seconds), options["unit"]);
    options["rule"] = TwitterCldr.PluralRules.rule_for(number);
    strings = (function() {
      var _i, _len, _ref, _results;
      _ref = this.tokens[options["direction"]][options["unit"]][options["type"]][options["rule"]];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        token = _ref[_i];
        _results.push(token.value);
      }
      return _results;
    }).call(this);
    return strings.join("").replace(/\{[0-9]\}/, number.toString());
  };

  TimespanFormatter.prototype.calculate_unit = function(seconds) {
    if (seconds < 30) {
      return "second";
    } else if (seconds < 2670) {
      return "minute";
    } else if (seconds < 86369) {
      return "hour";
    } else if (seconds < 604800) {
      return "day";
    } else if (seconds < 2591969) {
      return "week";
    } else if (seconds < 31556926) {
      return "month";
    } else {
      return "year";
    }
  };

  TimespanFormatter.prototype.calculate_time = function(seconds, unit) {
    return Math.round(seconds / this.time_in_seconds[unit]);
  };

  return TimespanFormatter;

})();

TwitterCldr.DateTimeFormatter = (function() {

  function DateTimeFormatter() {
    this.tokens = {"date_time":{"default":[{"value":"d","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"MMM","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"y","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"HH","type":"pattern"},{"value":":","type":"plaintext"},{"value":"mm","type":"pattern"},{"value":":","type":"plaintext"},{"value":"ss","type":"pattern"}],"full":[{"value":"EEEE","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"d","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"MMMM","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"y","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"HH","type":"pattern"},{"value":":","type":"plaintext"},{"value":"mm","type":"pattern"},{"value":":","type":"plaintext"},{"value":"ss","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"zzzz","type":"pattern"}],"long":[{"value":"d","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"MMMM","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"y","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"HH","type":"pattern"},{"value":":","type":"plaintext"},{"value":"mm","type":"pattern"},{"value":":","type":"plaintext"},{"value":"ss","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"z","type":"pattern"}],"medium":[{"value":"d","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"MMM","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"y","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"HH","type":"pattern"},{"value":":","type":"plaintext"},{"value":"mm","type":"pattern"},{"value":":","type":"plaintext"},{"value":"ss","type":"pattern"}],"short":[{"value":"dd","type":"pattern"},{"value":"-","type":"plaintext"},{"value":"MM","type":"pattern"},{"value":"-","type":"plaintext"},{"value":"yy","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"HH","type":"pattern"},{"value":":","type":"plaintext"},{"value":"mm","type":"pattern"}]},"time":{"default":[{"value":"HH","type":"pattern"},{"value":":","type":"plaintext"},{"value":"mm","type":"pattern"},{"value":":","type":"plaintext"},{"value":"ss","type":"pattern"}],"full":[{"value":"HH","type":"pattern"},{"value":":","type":"plaintext"},{"value":"mm","type":"pattern"},{"value":":","type":"plaintext"},{"value":"ss","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"zzzz","type":"pattern"}],"long":[{"value":"HH","type":"pattern"},{"value":":","type":"plaintext"},{"value":"mm","type":"pattern"},{"value":":","type":"plaintext"},{"value":"ss","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"z","type":"pattern"}],"medium":[{"value":"HH","type":"pattern"},{"value":":","type":"plaintext"},{"value":"mm","type":"pattern"},{"value":":","type":"plaintext"},{"value":"ss","type":"pattern"}],"short":[{"value":"HH","type":"pattern"},{"value":":","type":"plaintext"},{"value":"mm","type":"pattern"}]},"date":{"default":[{"value":"d","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"MMM","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"y","type":"pattern"}],"full":[{"value":"EEEE","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"d","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"MMMM","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"y","type":"pattern"}],"long":[{"value":"d","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"MMMM","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"y","type":"pattern"}],"medium":[{"value":"d","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"MMM","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"y","type":"pattern"}],"short":[{"value":"dd","type":"pattern"},{"value":"-","type":"plaintext"},{"value":"MM","type":"pattern"},{"value":"-","type":"plaintext"},{"value":"yy","type":"pattern"}]}};
    this.calendar = {"days":{"format":{"abbreviated":{"fri":"vr","mon":"ma","sat":"za","sun":"zo","thu":"do","tue":"di","wed":"wo"},"narrow":{"fri":"V","mon":"M","sat":"Z","sun":"Z","thu":"D","tue":"D","wed":"W"},"wide":{"fri":"vrijdag","mon":"maandag","sat":"zaterdag","sun":"zondag","thu":"donderdag","tue":"dinsdag","wed":"woensdag"}},"stand-alone":{"abbreviated":{"fri":"vr","mon":"ma","sat":"za","sun":"zo","thu":"do","tue":"di","wed":"wo"},"narrow":{"fri":"V","mon":"M","sat":"Z","sun":"Z","thu":"D","tue":"D","wed":"W"},"wide":{"fri":"vrijdag","mon":"maandag","sat":"zaterdag","sun":"zondag","thu":"donderdag","tue":"dinsdag","wed":"woensdag"}}},"eras":{"abbr":{"0":"v. Chr.","1":"n. Chr."},"name":{"0":"Voor Christus","1":"na Christus"},"narrow":{"0":"v.C.","1":"n.C."}},"fields":{"day":"Dag","dayperiod":"AM/PM","era":"Tijdperk","hour":"Uur","minute":"Minuut","month":"Maand","second":"Seconde","week":"week","weekday":"Dag van de week","year":"Jaar","zone":"Zone"},"formats":{"date":{"default":{"pattern":"d MMM y"},"full":{"pattern":"EEEE d MMMM y"},"long":{"pattern":"d MMMM y"},"medium":{"pattern":"d MMM y"},"short":{"pattern":"dd-MM-yy"}},"datetime":{"default":{"pattern":"{{date}} {{time}}"},"full":{"pattern":"{{date}} {{time}}"},"long":{"pattern":"{{date}} {{time}}"},"medium":{"pattern":"{{date}} {{time}}"},"short":{"pattern":"{{date}} {{time}}"}},"time":{"default":{"pattern":"HH:mm:ss"},"full":{"pattern":"HH:mm:ss zzzz"},"long":{"pattern":"HH:mm:ss z"},"medium":{"pattern":"HH:mm:ss"},"short":{"pattern":"HH:mm"}}},"months":{"format":{"abbreviated":{"1":"jan.","10":"okt.","11":"nov.","12":"dec.","2":"feb.","3":"mrt.","4":"apr.","5":"mei","6":"jun.","7":"jul.","8":"aug.","9":"sep."},"narrow":{"1":"J","10":"O","11":"N","12":"D","2":"F","3":"M","4":"A","5":"M","6":"J","7":"J","8":"A","9":"S"},"wide":{"1":"januari","10":"oktober","11":"november","12":"december","2":"februari","3":"maart","4":"april","5":"mei","6":"juni","7":"juli","8":"augustus","9":"september"}},"stand-alone":{"abbreviated":{"1":"jan","10":"okt","11":"nov","12":"dec","2":"feb","3":"mrt","4":"apr","6":"jun","7":"jul","8":"aug","9":"sep"},"narrow":{"1":"J","10":"O","11":"N","12":"D","2":"F","3":"M","4":"A","5":"M","6":"J","7":"J","8":"A","9":"S"},"wide":{"1":"januari","10":"oktober","11":"november","12":"december","2":"februari","3":"maart","4":"april","5":"mei","6":"juni","7":"juli","8":"augustus","9":"september"}}},"periods":{"format":{"abbreviated":{"noon":"12 uur 's middags"},"narrow":{"noon":"n"},"wide":{"am":"AM","noon":"12 uur 's middags","pm":"PM"}},"stand-alone":{"abbreviated":{"am":"a.m.","pm":"p.m."},"wide":{"am":"voormiddag","pm":"p.m."}}},"quarters":{"format":{"abbreviated":{"1":"K1","2":"K2","3":"K3","4":"K4"},"narrow":{"1":1,"2":2,"3":3,"4":4},"wide":{"1":"1e kwartaal","2":"2e kwartaal","3":"3e kwartaal","4":"4e kwartaal"}},"stand-alone":{"abbreviated":{"1":"K1","2":"K2","3":"K3","4":"K4"},"narrow":{"1":1,"2":2,"3":3,"4":4},"wide":{"1":"1e kwartaal","2":"2e kwartaal","3":"3e kwartaal","4":"4e kwartaal"}}}};
    this.weekday_keys = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    this.methods = {
      'G': 'era',
      'y': 'year',
      'Y': 'year_of_week_of_year',
      'Q': 'quarter',
      'q': 'quarter_stand_alone',
      'M': 'month',
      'L': 'month_stand_alone',
      'w': 'week_of_year',
      'W': 'week_of_month',
      'd': 'day',
      'D': 'day_of_month',
      'F': 'day_of_week_in_month',
      'E': 'weekday',
      'e': 'weekday_local',
      'c': 'weekday_local_stand_alone',
      'a': 'period',
      'h': 'hour',
      'H': 'hour',
      'K': 'hour',
      'k': 'hour',
      'm': 'minute',
      's': 'second',
      'S': 'second_fraction',
      'z': 'timezone',
      'Z': 'timezone',
      'v': 'timezone_generic_non_location',
      'V': 'timezone_metazone'
    };
  }

  DateTimeFormatter.prototype.format = function(obj, options) {
    var format_token, token, tokens,
      _this = this;
    format_token = function(token) {
      var result;
      result = "";
      switch (token.type) {
        case "pattern":
          return _this.result_for_token(token, obj);
        default:
          if (token.value.length > 0 && token.value[0] === "'" && token.value[token.value.length - 1] === "'") {
            return token.value.substring(1, token.value.length - 1);
          } else {
            return token.value;
          }
      }
    };
    tokens = this.get_tokens(obj, options);
    return ((function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = tokens.length; _i < _len; _i++) {
        token = tokens[_i];
        _results.push(format_token(token));
      }
      return _results;
    })()).join("");
  };

  DateTimeFormatter.prototype.get_tokens = function(obj, options) {
    return this.tokens[options.format || "date_time"][options.type || "default"];
  };

  DateTimeFormatter.prototype.result_for_token = function(token, date) {
    return this[this.methods[token.value[0]]](date, token.value, token.value.length);
  };

  DateTimeFormatter.prototype.era = function(date, pattern, length) {
    var choices, index;
    switch (length) {
      case 1:
      case 2:
      case 3:
        choices = this.calendar["eras"]["abbr"];
        break;
      default:
        choices = this.calendar["eras"]["name"];
    }
    index = date.getFullYear() < 0 ? 0 : 1;
    return choices[index];
  };

  DateTimeFormatter.prototype.year = function(date, pattern, length) {
    var year;
    year = date.getFullYear().toString();
    if (length === 2) {
      if (year.length !== 1) {
        year = year.slice(-2);
      }
    }
    if (length > 1) {
      year = ("0000" + year).slice(-length);
    }
    return year;
  };

  DateTimeFormatter.prototype.year_of_week_of_year = function(date, pattern, length) {
    throw 'not implemented';
  };

  DateTimeFormatter.prototype.day_of_week_in_month = function(date, pattern, length) {
    throw 'not implemented';
  };

  DateTimeFormatter.prototype.quarter = function(date, pattern, length) {
    var quarter;
    quarter = ((date.getMonth() / 3) | 0) + 1;
    switch (length) {
      case 1:
        return quarter.toString();
      case 2:
        return ("0000" + quarter.toString()).slice(-length);
      case 3:
        return this.calendar.quarters.format.abbreviated[quarter];
      case 4:
        return this.calendar.quarters.format.wide[quarter];
    }
  };

  DateTimeFormatter.prototype.quarter_stand_alone = function(date, pattern, length) {
    var quarter;
    quarter = (date.getMonth() - 1) / 3 + 1;
    switch (length) {
      case 1:
        return quarter.toString();
      case 2:
        return ("0000" + quarter.toString()).slice(-length);
      case 3:
        throw 'not yet implemented (requires cldr\'s "multiple inheritance")';
        break;
      case 4:
        throw 'not yet implemented (requires cldr\'s "multiple inheritance")';
        break;
      case 5:
        return this.calendar.quarters['stand-alone'].narrow[quarter];
    }
  };

  DateTimeFormatter.prototype.month = function(date, pattern, length) {
    var month_str;
    month_str = (date.getMonth() + 1).toString();
    switch (length) {
      case 1:
        return month_str;
      case 2:
        return ("0000" + month_str).slice(-length);
      case 3:
        return this.calendar.months.format.abbreviated[month_str];
      case 4:
        return this.calendar.months.format.wide[month_str];
      case 5:
        throw 'not yet implemented (requires cldr\'s "multiple inheritance")';
        break;
      default:
        throw "Unknown date format";
    }
  };

  DateTimeFormatter.prototype.month_stand_alone = function(date, pattern, length) {
    switch (length) {
      case 1:
        return date.getMonth().toString();
      case 2:
        return ("0000" + date.getMonth().toString()).slice(-length);
      case 3:
        throw 'not yet implemented (requires cldr\'s "multiple inheritance")';
        break;
      case 4:
        throw 'not yet implemented (requires cldr\'s "multiple inheritance")';
        break;
      case 5:
        return this.calendar.months['stand-alone'].narrow[date.month];
      default:
        throw "Unknown date format";
    }
  };

  DateTimeFormatter.prototype.day = function(date, pattern, length) {
    switch (length) {
      case 1:
        return date.getDate().toString();
      case 2:
        return ("0000" + date.getDate().toString()).slice(-length);
    }
  };

  DateTimeFormatter.prototype.weekday = function(date, pattern, length) {
    var key;
    key = this.weekday_keys[date.getDay()];
    switch (length) {
      case 1:
      case 2:
      case 3:
        return this.calendar.days.format.abbreviated[key];
      case 4:
        return this.calendar.days.format.wide[key];
      case 5:
        return this.calendar.days['stand-alone'].narrow[key];
    }
  };

  DateTimeFormatter.prototype.weekday_local = function(date, pattern, length) {
    var day;
    switch (length) {
      case 1:
      case 2:
        day = date.getDay();
        return (day === 0 ? "7" : day.toString());
      default:
        return this.weekday(date, pattern, length);
    }
  };

  DateTimeFormatter.prototype.weekday_local_stand_alone = function(date, pattern, length) {
    switch (length) {
      case 1:
        return this.weekday_local(date, pattern, length);
      default:
        return this.weekday(date, pattern, length);
    }
  };

  DateTimeFormatter.prototype.period = function(time, pattern, length) {
    if (time.getHours() > 11) {
      return this.calendar.periods.format.wide["pm"];
    } else {
      return this.calendar.periods.format.wide["am"];
    }
  };

  DateTimeFormatter.prototype.hour = function(time, pattern, length) {
    var hour;
    hour = time.getHours();
    switch (pattern[0]) {
      case 'h':
        if (hour > 12) {
          hour = hour - 12;
        } else if (hour === 0) {
          hour = 12;
        }
        break;
      case 'K':
        if (hour > 11) {
          hour = hour - 12;
        }
        break;
      case 'k':
        if (hour === 0) {
          hour = 24;
        }
    }
    if (length === 1) {
      return hour.toString();
    } else {
      return ("000000" + hour.toString()).slice(-length);
    }
  };

  DateTimeFormatter.prototype.minute = function(time, pattern, length) {
    if (length === 1) {
      return time.getMinutes().toString();
    } else {
      return ("000000" + time.getMinutes().toString()).slice(-length);
    }
  };

  DateTimeFormatter.prototype.second = function(time, pattern, length) {
    if (length === 1) {
      return time.getSeconds().toString();
    } else {
      return ("000000" + time.getSeconds().toString()).slice(-length);
    }
  };

  DateTimeFormatter.prototype.second_fraction = function(time, pattern, length) {
    if (length > 6) {
      throw 'can not use the S format with more than 6 digits';
    }
    return ("000000" + Math.round(Math.pow(time.getMilliseconds() * 100.0, 6 - length)).toString()).slice(-length);
  };

  DateTimeFormatter.prototype.timezone = function(time, pattern, length) {
    var hours, minutes, offset, offsetString, sign;
    offset = time.getTimezoneOffset();
    hours = ("00" + (Math.abs(offset) / 60).toString()).slice(-2);
    minutes = ("00" + (Math.abs(offset) % 60).toString()).slice(-2);
    sign = offset > 0 ? "-" : "+";
    offsetString = sign + hours + ":" + minutes;
    switch (length) {
      case 1:
      case 2:
      case 3:
        return offsetString;
      default:
        return "UTC" + offsetString;
    }
  };

  DateTimeFormatter.prototype.timezone_generic_non_location = function(time, pattern, length) {
    throw 'not yet implemented (requires timezone translation data")';
  };

  return DateTimeFormatter;

})();

TwitterCldr.NumberFormatter = (function() {

  function NumberFormatter() {
    this.all_tokens = {"decimal":{"positive":["","#,##0.###"],"negative":["-","#,##0.###"]},"percent":{"positive":["","#,##0","%"],"negative":["-","#,##0","%"]},"currency":{"positive":["¤ ","#,##0.00"],"negative":["-¤ ","#,##0.00","-"]}};
    this.tokens = [];
    this.symbols = {"alias":"","decimal":",","exponential":"E","group":".","infinity":"∞","list":";","minus_sign":"-","nan":"NaN","per_mille":"‰","percent_sign":"%","plus_sign":"+"};
    this.default_symbols = {
      'group': ',',
      'decimal': '.',
      'plus_sign': '+',
      'minus_sign': '-'
    };
  }

  NumberFormatter.prototype.format = function(number, options) {
    var fraction, fraction_format, int, integer_format, key, opts, prefix, result, sign, suffix, val, _ref, _ref1;
    if (options == null) {
      options = {};
    }
    opts = this.default_format_options_for(number);
    for (key in options) {
      val = options[key];
      opts[key] = options[key] != null ? options[key] : opts[key];
    }
    _ref = this.partition_tokens(this.get_tokens(number, opts)), prefix = _ref[0], suffix = _ref[1], integer_format = _ref[2], fraction_format = _ref[3];
    _ref1 = this.parse_number(number, opts), int = _ref1[0], fraction = _ref1[1];
    result = integer_format.apply(parseFloat(int), opts);
    if (fraction) {
      result += fraction_format.apply(fraction, opts);
    }
    sign = number < 0 && prefix !== "-" ? this.symbols.minus_sign || this.default_symbols.minus_sign : "";
    return "" + prefix + result + suffix;
  };

  NumberFormatter.prototype.partition_tokens = function(tokens) {
    return [tokens[0] || "", tokens[2] || "", new TwitterCldr.NumberFormatter.IntegerHelper(tokens[1], this.symbols), new TwitterCldr.NumberFormatter.FractionHelper(tokens[1], this.symbols)];
  };

  NumberFormatter.prototype.parse_number = function(number, options) {
    var precision;
    if (options == null) {
      options = {};
    }
    if (options.precision != null) {
      precision = options.precision;
    } else {
      precision = this.precision_from(number);
    }
    number = this.round_to(number, precision);
    return Math.abs(number).toFixed(precision).split(".");
  };

  NumberFormatter.prototype.precision_from = function(num) {
    var parts;
    parts = num.toString().split(".");
    if (parts.length === 2) {
      return parts[1].length;
    } else {
      return 0;
    }
  };

  NumberFormatter.prototype.round_to = function(number, precision) {
    var factor;
    factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  };

  NumberFormatter.prototype.get_tokens = function() {
    throw "get_tokens() not implemented - use a derived class like PercentFormatter.";
  };

  return NumberFormatter;

})();

TwitterCldr.PercentFormatter = (function(_super) {

  __extends(PercentFormatter, _super);

  function PercentFormatter(options) {
    if (options == null) {
      options = {};
    }
    this.default_percent_sign = "%";
    PercentFormatter.__super__.constructor.apply(this, arguments);
  }

  PercentFormatter.prototype.format = function(number, options) {
    if (options == null) {
      options = {};
    }
    return PercentFormatter.__super__.format.call(this, number, options).replace('¤', this.symbols.percent_sign || this.default_percent_sign);
  };

  PercentFormatter.prototype.default_format_options_for = function(number) {
    return {
      precision: 0
    };
  };

  PercentFormatter.prototype.get_tokens = function(number, options) {
    if (number < 0) {
      return this.all_tokens.percent.negative;
    } else {
      return this.all_tokens.percent.positive;
    }
  };

  return PercentFormatter;

})(TwitterCldr.NumberFormatter);

TwitterCldr.DecimalFormatter = (function(_super) {

  __extends(DecimalFormatter, _super);

  function DecimalFormatter() {
    return DecimalFormatter.__super__.constructor.apply(this, arguments);
  }

  DecimalFormatter.prototype.format = function(number, options) {
    if (options == null) {
      options = {};
    }
    try {
      return DecimalFormatter.__super__.format.call(this, number, options);
    } catch (error) {
      return number;
    }
  };

  DecimalFormatter.prototype.default_format_options_for = function(number) {
    return {
      precision: this.precision_from(number)
    };
  };

  DecimalFormatter.prototype.get_tokens = function(number, options) {
    if (options == null) {
      options = {};
    }
    if (number < 0) {
      return this.all_tokens.decimal.negative;
    } else {
      return this.all_tokens.decimal.positive;
    }
  };

  return DecimalFormatter;

})(TwitterCldr.NumberFormatter);

TwitterCldr.CurrencyFormatter = (function(_super) {

  __extends(CurrencyFormatter, _super);

  function CurrencyFormatter(options) {
    if (options == null) {
      options = {};
    }
    this.default_currency_symbol = "$";
    this.default_precision = 2;
    CurrencyFormatter.__super__.constructor.apply(this, arguments);
  }

  CurrencyFormatter.prototype.format = function(number, options) {
    var currency;
    if (options == null) {
      options = {};
    }
    if (options.currency) {
      if (TwitterCldr.Currencies != null) {
        currency = TwitterCldr.Currencies.for_code(options.currency);
        currency || (currency = TwitterCldr.Currencies.for_country(options.currency));
        currency || (currency = {
          symbol: options.currency
        });
      } else {
        currency = {
          symbol: options.currency
        };
      }
    } else {
      currency = {
        symbol: this.default_currency_symbol
      };
    }
    return CurrencyFormatter.__super__.format.call(this, number, options).replace('¤', currency.symbol);
  };

  CurrencyFormatter.prototype.default_format_options_for = function(number) {
    var precision;
    precision = this.precision_from(number);
    if (precision === 0) {
      precision = this.default_precision;
    }
    return {
      precision: precision
    };
  };

  CurrencyFormatter.prototype.get_tokens = function(number, options) {
    if (options == null) {
      options = {};
    }
    if (number < 0) {
      return this.all_tokens.currency.negative;
    } else {
      return this.all_tokens.currency.positive;
    }
  };

  return CurrencyFormatter;

})(TwitterCldr.NumberFormatter);

TwitterCldr.NumberFormatter.BaseHelper = (function() {

  function BaseHelper() {}

  BaseHelper.prototype.interpolate = function(string, value, orientation) {
    var i, length, start;
    if (orientation == null) {
      orientation = "right";
    }
    value = value.toString();
    length = value.length;
    start = orientation === "left" ? 0 : -length;
    if (string.length < length) {
      string = (((function() {
        var _i, _results;
        _results = [];
        for (i = _i = 0; 0 <= length ? _i < length : _i > length; i = 0 <= length ? ++_i : --_i) {
          _results.push("#");
        }
        return _results;
      })()).join("") + string).slice(-length);
    }
    if (start < 0) {
      string = string.slice(0, start + string.length) + value;
    } else {
      string = string.slice(0, start) + value + string.slice(length);
    }
    return string.replace(/#/g, "");
  };

  return BaseHelper;

})();

TwitterCldr.NumberFormatter.IntegerHelper = (function(_super) {

  __extends(IntegerHelper, _super);

  function IntegerHelper(token, symbols) {
    var format;
    if (symbols == null) {
      symbols = {};
    }
    format = token.split('.')[0];
    this.format = this.prepare_format(format, symbols);
    this.groups = this.parse_groups(format);
    this.separator = symbols.group || ',';
  }

  IntegerHelper.prototype.apply = function(number, options) {
    if (options == null) {
      options = {};
    }
    return this.format_groups(this.interpolate(this.format, parseInt(number)));
  };

  IntegerHelper.prototype.format_groups = function(string) {
    var cur_token, token, tokens;
    if (this.groups.length === 0) {
      return string;
    }
    tokens = [];
    cur_token = this.chop_group(string, this.groups[0]);
    tokens.push(cur_token);
    if (cur_token) {
      string = string.slice(0, string.length - cur_token.length);
    }
    while (string.length > this.groups[this.groups.length - 1]) {
      cur_token = this.chop_group(string, this.groups[this.groups.length - 1]);
      tokens.push(cur_token);
      if (cur_token) {
        string = string.slice(0, string.length - cur_token.length);
      }
    }
    tokens.push(string);
    return ((function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = tokens.length; _i < _len; _i++) {
        token = tokens[_i];
        if (token !== null) {
          _results.push(token);
        }
      }
      return _results;
    })()).reverse().join(this.separator);
  };

  IntegerHelper.prototype.parse_groups = function(format) {
    var index, rest, width, widths;
    if (!(index = format.lastIndexOf(','))) {
      return [];
    }
    rest = format.slice(0, index);
    widths = [format.length - index - 1];
    if (rest.lastIndexOf(',') > -1) {
      widths.push(rest.length - rest.lastIndexOf(',') - 1);
    }
    widths = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = widths.length; _i < _len; _i++) {
        width = widths[_i];
        if (width !== null) {
          _results.push(width);
        }
      }
      return _results;
    })();
    widths.reverse();
    return ((function() {
      var _i, _ref, _results;
      _results = [];
      for (index = _i = 0, _ref = widths.length; 0 <= _ref ? _i < _ref : _i > _ref; index = 0 <= _ref ? ++_i : --_i) {
        if (widths.indexOf(widths[index], index + 1) === -1) {
          _results.push(widths[index]);
        }
      }
      return _results;
    })()).reverse();
  };

  IntegerHelper.prototype.chop_group = function(string, size) {
    if (string.length > size) {
      return string.slice(-size);
    } else {
      return null;
    }
  };

  IntegerHelper.prototype.prepare_format = function(format, symbols) {
    return format.replace(",", "").replace("+", symbols.plus_sign).replace("-", symbols.minus_sign);
  };

  return IntegerHelper;

})(TwitterCldr.NumberFormatter.BaseHelper);

TwitterCldr.NumberFormatter.FractionHelper = (function(_super) {

  __extends(FractionHelper, _super);

  function FractionHelper(token, symbols) {
    if (symbols == null) {
      symbols = {};
    }
    this.format = token ? token.split('.').pop() : "";
    this.decimal = symbols.decimal || ".";
    this.precision = this.format.length;
  }

  FractionHelper.prototype.apply = function(fraction, options) {
    var precision;
    if (options == null) {
      options = {};
    }
    precision = options.precision != null ? options.precision : this.precision;
    if (precision > 0) {
      return this.decimal + this.interpolate(this.format_for(options), fraction, "left");
    } else {
      return "";
    }
  };

  FractionHelper.prototype.format_for = function(options) {
    var i, precision;
    precision = options.precision != null ? options.precision : this.precision;
    if (precision) {
      return ((function() {
        var _i, _results;
        _results = [];
        for (i = _i = 0; 0 <= precision ? _i < precision : _i > precision; i = 0 <= precision ? ++_i : --_i) {
          _results.push("0");
        }
        return _results;
      })()).join("");
    } else {
      return this.format;
    }
  };

  return FractionHelper;

})(TwitterCldr.NumberFormatter.BaseHelper);

TwitterCldr.Currencies = (function() {

  function Currencies() {}

  Currencies.currencies = {"Afghanistan":{"code":"AFN","currency":"Afghani","symbol":"؋"},"Albania":{"code":"ALL","currency":"Lek","symbol":"Lek"},"Argentina":{"code":"ARS","currency":"Peso","symbol":"$"},"Aruba":{"code":"AWG","currency":"Guilder","symbol":"ƒ"},"Australia":{"code":"AUD","currency":"Dollar","symbol":"$"},"Azerbaijan":{"code":"AZN","currency":"New Manat","symbol":"ман"},"Bahamas":{"code":"BSD","currency":"Dollar","symbol":"$"},"Barbados":{"code":"BBD","currency":"Dollar","symbol":"$"},"Belarus":{"code":"BYR","currency":"Ruble","symbol":"p."},"Belize":{"code":"BZD","currency":"Dollar","symbol":"BZ$"},"Bermuda":{"code":"BMD","currency":"Dollar","symbol":"$"},"Bolivia":{"code":"BOB","currency":"Boliviano","symbol":"$b"},"Bosnia and Herzegovina":{"code":"BAM","currency":"Convertible Marka","symbol":"KM"},"Botswana":{"code":"BWP","currency":"Pula","symbol":"P"},"Brazil":{"code":"BRL","currency":"Real","symbol":"R$"},"Brunei Darussalam":{"code":"BND","currency":"Dollar","symbol":"$"},"Bulgaria":{"code":"BGN","currency":"Lev","symbol":"лв"},"Cambodia":{"code":"KHR","currency":"Riel","symbol":"៛"},"Canada":{"code":"CAD","currency":"Dollar","symbol":"$"},"Cayman Islands":{"code":"KYD","currency":"Dollar","symbol":"$"},"Chile":{"code":"CLP","currency":"Peso","symbol":"$"},"China":{"code":"CNY","currency":"Yuan Renminbi","symbol":"¥"},"Colombia":{"code":"COP","currency":"Peso","symbol":"$"},"Costa Rica":{"code":"CRC","currency":"Colon","symbol":"₡"},"Croatia":{"code":"HRK","currency":"Kuna","symbol":"kn"},"Cuba":{"code":"CUP","currency":"Peso","symbol":"₱"},"Czech Republic":{"code":"CZK","currency":"Koruna","symbol":"Kč"},"Denmark":{"code":"DKK","currency":"Krone","symbol":"kr"},"Dominican Republic":{"code":"DOP","currency":"Peso","symbol":"RD$"},"East Caribbean":{"code":"XCD","currency":"Dollar","symbol":"$"},"Egypt":{"code":"EGP","currency":"Pound","symbol":"£"},"El Salvador":{"code":"SVC","currency":"Colon","symbol":"$"},"Estonia":{"code":"EEK","currency":"Kroon","symbol":"kr"},"Euro Member Countries":{"code":"EUR","currency":"European Union","symbol":"€"},"Falkland Islands (Malvinas)":{"code":"FKP","currency":"Pound","symbol":"£"},"Fiji":{"code":"FJD","currency":"Dollar","symbol":"$"},"Ghana":{"code":"GHC","currency":"Cedis","symbol":"¢"},"Gibraltar":{"code":"GIP","currency":"Pound","symbol":"£"},"Guatemala":{"code":"GTQ","currency":"Quetzal","symbol":"Q"},"Guernsey":{"code":"GGP","currency":"Pound","symbol":"£"},"Guyana":{"code":"GYD","currency":"Dollar","symbol":"$"},"Honduras":{"code":"HNL","currency":"Lempira","symbol":"L"},"Hong Kong":{"code":"HKD","currency":"Dollar","symbol":"$"},"Hungary":{"code":"HUF","currency":"Forint","symbol":"Ft"},"Iceland":{"code":"ISK","currency":"Krona","symbol":"kr"},"India":{"code":"INR","currency":"Rupee","symbol":"₨"},"Indonesia":{"code":"IDR","currency":"Rupiah","symbol":"Rp"},"Iran":{"code":"IRR","currency":"Rial","symbol":"﷼"},"Isle of Man":{"code":"IMP","currency":"Pound","symbol":"£"},"Israel":{"code":"ILS","currency":"Shekel","symbol":"₪"},"Jamaica":{"code":"JMD","currency":"Dollar","symbol":"J$"},"Japan":{"code":"JPY","currency":"Yen","symbol":"¥"},"Jersey":{"code":"JEP","currency":"Pound","symbol":"£"},"Kazakhstan":{"code":"KZT","currency":"Tenge","symbol":"лв"},"Kyrgyzstan":{"code":"KGS","currency":"Som","symbol":"лв"},"Laos":{"code":"LAK","currency":"Kip","symbol":"₭"},"Latvia":{"code":"LVL","currency":"Lat","symbol":"Ls"},"Lebanon":{"code":"LBP","currency":"Pound","symbol":"£"},"Liberia":{"code":"LRD","currency":"Dollar","symbol":"$"},"Lithuania":{"code":"LTL","currency":"Litas","symbol":"Lt"},"Macedonia":{"code":"MKD","currency":"Denar","symbol":"ден"},"Malaysia":{"code":"MYR","currency":"Ringgit","symbol":"RM"},"Mauritius":{"code":"MUR","currency":"Rupee","symbol":"₨"},"Mexico":{"code":"MXN","currency":"Peso","symbol":"$"},"Mongolia":{"code":"MNT","currency":"Tughrik","symbol":"₮"},"Mozambique":{"code":"MZN","currency":"Metical","symbol":"MT"},"Namibia":{"code":"NAD","currency":"Dollar","symbol":"$"},"Nepal":{"code":"NPR","currency":"Rupee","symbol":"₨"},"Netherlands Antilles":{"code":"ANG","currency":"Guilder","symbol":"ƒ"},"New Zealand":{"code":"NZD","currency":"Dollar","symbol":"$"},"Nicaragua":{"code":"NIO","currency":"Cordoba","symbol":"C$"},"Nigeria":{"code":"NGN","currency":"Naira","symbol":"₦"},"North Korea":{"code":"KPW","currency":"Won","symbol":"₩"},"Norway":{"code":"NOK","currency":"Krone","symbol":"kr"},"Oman":{"code":"OMR","currency":"Rial","symbol":"﷼"},"Pakistan":{"code":"PKR","currency":"Rupee","symbol":"₨"},"Panama":{"code":"PAB","currency":"Balboa","symbol":"B/."},"Paraguay":{"code":"PYG","currency":"Guarani","symbol":"Gs"},"Peru":{"code":"PEN","currency":"Nuevo Sol","symbol":"S/."},"Philippines":{"code":"PHP","currency":"Peso","symbol":"₱"},"Poland":{"code":"PLN","currency":"Zloty","symbol":"zł"},"Qatar":{"code":"QAR","currency":"Riyal","symbol":"﷼"},"Romania":{"code":"RON","currency":"New Leu","symbol":"lei"},"Russia":{"code":"RUB","currency":"Ruble","symbol":"руб"},"Saint Helena":{"code":"SHP","currency":"Pound","symbol":"£"},"Saudi Arabia":{"code":"SAR","currency":"Riyal","symbol":"﷼"},"Serbia":{"code":"RSD","currency":"Dinar","symbol":"Дин."},"Seychelles":{"code":"SCR","currency":"Rupee","symbol":"₨"},"Singapore":{"code":"SGD","currency":"Dollar","symbol":"$"},"Solomon Islands":{"code":"SBD","currency":"Dollar","symbol":"$"},"Somalia":{"code":"SOS","currency":"Shilling","symbol":"S"},"South Africa":{"code":"ZAR","currency":"Rand","symbol":"R"},"South Korea":{"code":"KRW","currency":"Won","symbol":"₩"},"Sri Lanka":{"code":"LKR","currency":"Rupee","symbol":"₨"},"Suriname":{"code":"SRD","currency":"Dollar","symbol":"$"},"Sweden":{"code":"SEK","currency":"Krona","symbol":"kr"},"Switzerland":{"code":"CHF","currency":"Franc","symbol":"CHF"},"Syria":{"code":"SYP","currency":"Pound","symbol":"£"},"Taiwan":{"code":"TWD","currency":"New Dollar","symbol":"NT$"},"Thailand":{"code":"THB","currency":"Baht","symbol":"฿"},"Trinidad and Tobago":{"code":"TTD","currency":"Dollar","symbol":"TT$"},"Turkey":{"code":"TRY","currency":"Lira","symbol":"₤"},"Tuvalu":{"code":"TVD","currency":"Dollar","symbol":"$"},"Ukraine":{"code":"UAH","currency":"Hryvna","symbol":"₴"},"United Kingdom":{"code":"GBP","currency":"Pound","symbol":"£"},"United States":{"code":"USD","currency":"Dollar","symbol":"$"},"Uruguay":{"code":"UYU","currency":"Peso","symbol":"$U"},"Uzbekistan":{"code":"UZS","currency":"Som","symbol":"лв"},"Venezuela":{"code":"VEF","currency":"Bolivar Fuerte","symbol":"Bs"},"Viet Nam":{"code":"VND","currency":"Dong","symbol":"₫"},"Yemen":{"code":"YER","currency":"Rial","symbol":"﷼"},"Zimbabwe":{"code":"ZWD","currency":"Dollar","symbol":"Z$"}};

  Currencies.countries = function() {
    var country_name, data;
    return this.names || (this.names = (function() {
      var _ref, _results;
      _ref = this.currencies;
      _results = [];
      for (country_name in _ref) {
        data = _ref[country_name];
        _results.push(country_name);
      }
      return _results;
    }).call(this));
  };

  Currencies.currency_codes = function() {
    var country_name, data;
    return this.codes || (this.codes = (function() {
      var _ref, _results;
      _ref = this.currencies;
      _results = [];
      for (country_name in _ref) {
        data = _ref[country_name];
        _results.push(data.code);
      }
      return _results;
    }).call(this));
  };

  Currencies.for_country = function(country_name) {
    return this.currencies[country_name];
  };

  Currencies.for_code = function(currency_code) {
    var country_name, data, final, _ref;
    final = null;
    _ref = this.currencies;
    for (country_name in _ref) {
      data = _ref[country_name];
      if (data.code === currency_code) {
        final = {
          country: country_name,
          code: data.code,
          symbol: data.symbol,
          currency: data.currency
        };
        break;
      }
    }
    return final;
  };

  return Currencies;

})();

if (typeof exports !== "undefined" && exports !== null) {
  for (key in TwitterCldr) {
    obj = TwitterCldr[key];
    exports[key] = obj;
  }
}
