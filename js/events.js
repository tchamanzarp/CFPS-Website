/* ============================================================
   CFPS EVENTS — THIS IS THE ONLY FILE TO EDIT EACH SEMESTER
   ============================================================

   Every event is one block that looks like this:

   { month: "September", date: "Sep 3", weekday: "Thu",
     category: "Social", title: "Welcome Back Networking Night",
     tentative: true },

   Rules:
   1. category must be exactly one of:
      "Social", "Prof Dev", "Chapter", "Corporate", "Competition", "Conference"
   2. When a date is locked in, change  tentative: true  to  tentative: false
      and the site will show a Confirmed badge instead of Tentative.
   3. Optional: add  location: "Las Vegas"  to show a location line.
   4. Keep events in date order. Month headers are generated automatically.
   5. Copy and paste a whole block (including the curly braces and the
      comma after the closing brace) to add a new event.
============================================================ */

var CFPS_EVENTS = [
  // ---------------- SEPTEMBER ----------------
  { month: "September", date: "Sep 3",  weekday: "Thu", category: "Social",      title: "Welcome Back Networking Night", tentative: true },
  { month: "September", date: "Sep 10", weekday: "Thu", category: "Chapter",     title: "Orientation", tentative: true },
  { month: "September", date: "Sep 17", weekday: "Thu", category: "Chapter",     title: "Career Development Day", tentative: true },
  { month: "September", date: "Sep 24", weekday: "Thu", category: "Prof Dev",    title: "Segment: Wealth Management", tentative: true },

  // ---------------- OCTOBER ----------------
  { month: "October",   date: "Oct 1",  weekday: "Thu", category: "Chapter",     title: "LinkedIn and Networking", tentative: true },
  { month: "October",   date: "Oct 2",  weekday: "Fri", category: "Prof Dev",    title: "Mock Interview Day", tentative: true },
  { month: "October",   date: "Oct 5 to 7", weekday: "Mon to Wed", category: "Conference", title: "CFP Board Connections Conference", location: "Las Vegas", tentative: true },
  { month: "October",   date: "Oct 8",  weekday: "Thu", category: "Corporate",   title: "Morgan Stanley Visit", tentative: true },
  { month: "October",   date: "Oct 8",  weekday: "Thu", category: "Conference",  title: "FPA Symposium", location: "Houston, TX", tentative: true },
  { month: "October",   date: "Oct 15", weekday: "Thu", category: "Chapter",     title: "Interview Prep", tentative: true },
  { month: "October",   date: "Oct 16", weekday: "Fri", category: "Social",      title: "Mid Semester Networking Night", tentative: true },
  { month: "October",   date: "Oct 22", weekday: "Thu", category: "Prof Dev",    title: "Alumni Panel", tentative: true },
  { month: "October",   date: "Oct 29", weekday: "Thu", category: "Prof Dev",    title: "Tax Planning Workshop", tentative: true },

  // ---------------- NOVEMBER ----------------
  { month: "November",  date: "Nov 5",  weekday: "Thu", category: "Chapter",     title: "Chapter Meeting, topic TBD", tentative: true },
  { month: "November",  date: "Nov 12", weekday: "Thu", category: "Competition", title: "Case Competition", tentative: true },
  { month: "November",  date: "Nov 13", weekday: "Fri", category: "Social",      title: "Late Semester Networking Night", tentative: true },
  { month: "November",  date: "Nov 19", weekday: "Thu", category: "Chapter",     title: "Chapter Meeting, topic TBD", tentative: true },
  { month: "November",  date: "Nov 20", weekday: "Fri", category: "Chapter",     title: "Community Service Event", tentative: true },

  // ---------------- DECEMBER ----------------
  { month: "December",  date: "Dec 2",  weekday: "Wed", category: "Prof Dev",    title: "Retirement Planning Workshop", tentative: true },
  { month: "December",  date: "Dec 3",  weekday: "Thu", category: "Chapter",     title: "Election Day", tentative: true },
  { month: "December",  date: "Dec 10", weekday: "Thu", category: "Social",      title: "End of Year Celebration", tentative: true }
];

/* ============================================================
   Rendering code below. Officers should not need to touch this.
============================================================ */

(function () {
  function eventCard(ev) {
    var card = document.createElement("article");
    card.className = "event-card";

    var status = ev.tentative
      ? '<span class="chip chip-tentative">Tentative</span>'
      : '<span class="chip chip-solid">Confirmed</span>';

    var loc = ev.location ? '<span class="event-loc">' + ev.location + "</span>" : "";

    card.innerHTML =
      '<div class="event-date"><b>' + ev.date + "</b><span>" + ev.weekday + "</span></div>" +
      '<div class="event-body"><h3 class="h3">' + ev.title + "</h3>" +
      '<div class="event-meta"><span class="chip chip-red">' + ev.category + "</span>" +
      status + loc + "</div></div>";
    return card;
  }

  // Full events page: grouped by month, filterable
  var listRoot = document.getElementById("eventsList");
  if (listRoot) {
    var months = [];
    CFPS_EVENTS.forEach(function (ev) {
      if (months.indexOf(ev.month) === -1) months.push(ev.month);
    });

    months.forEach(function (m) {
      var block = document.createElement("section");
      block.className = "month-block";
      block.setAttribute("data-month", m);
      block.innerHTML = '<h2 class="month-title">' + m + "</h2>";
      var list = document.createElement("div");
      list.className = "event-list";
      CFPS_EVENTS.forEach(function (ev) {
        if (ev.month === m) {
          var c = eventCard(ev);
          c.setAttribute("data-category", ev.category);
          list.appendChild(c);
        }
      });
      block.appendChild(list);
      listRoot.appendChild(block);
    });

    // Filters
    document.querySelectorAll(".filter-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".filter-btn").forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var pick = btn.getAttribute("data-filter");

        document.querySelectorAll(".event-card").forEach(function (card) {
          var show = pick === "All" || card.getAttribute("data-category") === pick;
          card.style.display = show ? "" : "none";
        });
        // Hide month headers with nothing visible
        document.querySelectorAll(".month-block").forEach(function (block) {
          var visible = block.querySelectorAll(".event-card:not([style*='none'])").length;
          block.style.display = visible ? "" : "none";
        });
      });
    });
  }

  // Homepage teaser: first three events
  var teaser = document.getElementById("upcomingTeaser");
  if (teaser) {
    CFPS_EVENTS.slice(0, 3).forEach(function (ev) {
      teaser.appendChild(eventCard(ev));
    });
  }
})();
