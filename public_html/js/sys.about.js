/**
 * Application: SystemAbout
 *
 * @package ajwm.Applications
 * @author Anders Evenrud <andersevenrud@gmail.com>
 * @class
 */
var SystemAbout = (function($, undefined) {
  return function(GtkWindow, Application, API, argv) {




    var Window_window1 = GtkWindow.extend({

      init : function(app) {
        this._super("SystemAbout", false, app);
        this.content = $("<div class=\"window1\"> <div class=\"GtkWindow SystemAbout window1\"> <div class=\"SystemAbout\"><div class=\"SystemAboutInner\"><span>Created by Anders Evenrud</span><a href=\"http://no.linkedin.com/in/andersevenrud\" target=\"_blank\">LinkedIn</a><br /><a href=\"https://www.facebook.com/anders.evenrud\" target=\"_blank\">Facebook</a><br /><a href=\"mailto:andersevenrud@gmail.com\" target=\"_blank\">&lt;andersevenrud@gmail.com&gt;</a><br /><br />Icons from Gnome<br />Theme inspired by GTK</div></div> </div> </div> ").html();
        this.title = 'About';
        this.icon = 'actions/gtk-about.png';
        this.is_draggable = true;
        this.is_resizable = false;
        this.is_scrollable = false;
        this.is_sessionable = false;
        this.is_minimizable = false;
        this.is_maximizable = false;
        this.is_closable = true;
        this.is_orphan = true;
        this.width = 220;
        this.height = 120;
        this.gravity = "center";
      },

      destroy : function() {
        this._super();
      },



      create : function(id, zi, mcallback) {
        var el = this._super(id, zi, mcallback);
        var self = this;

        if ( el ) {

          // Do your stuff here

        }

      }
    });


    ///////////////////////////////////////////////////////////////////////////
    // APPLICATION
    ///////////////////////////////////////////////////////////////////////////

    var __SystemAbout = Application.extend({

      init : function() {
        this._super("SystemAbout", argv);
      },

      destroy : function() {
        this._super();
      },

      run : function() {
        var self = this;

        var root_window = new Window_window1(self);
        root_window.show();

        this._super(root_window);

        // Do your stuff here
      }
    });

    return new __SystemAbout();
  };
})($);

