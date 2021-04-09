(ns app.main
  (:require
   [reagent.core :as r :refer [atom]]
   ["antd" :refer [Button Space message.info]]))

(defn app
  "Your super awesome prototype here!"
  []
  [:div.padding-xl
   [:img.margin-bottom-md {:src "picasso-logo-with-tag.svg" :width 180}]
   [:h1 "Build something useful and unique!"]
   [:> Space
    [:> Button
     {:type :primary
      :on-click
       #(message.info
         #js{:content "Boom!"
             :icon
             (r/as-element
               [:span.margin-right-sm "💥"])})}
     "Click me"]
    [:a {:target "_blank" :href "https://picasso-sprints.herokuapp.com/frontend"}
      [:span.padding-sm "Front-end Zen"]]]])
(defn mount []
  (r/render
   [app]
   (.getElementById
    js/document
    "app")))

(defn reload! []
  (println "App reloaded!")
  (mount))

(defn main! []
  (println "App loaded!")
  (mount))
